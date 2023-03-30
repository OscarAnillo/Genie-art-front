import { useState } from 'react';

import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export const HeaderComponent = ({ setListImages, setIsLoading}) => {
    const [userInput, setUserInput] = useState('');

    const changeHandler = (e) => {
        setUserInput(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        if(!userInput){
            alert('Please provide your input');
            return;
        }
        try {
            setIsLoading(true)
            const response = await fetch('http://localhost:3001/openai/images', {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    prompt: userInput
                })
            })
            const jsonData = await response.json()
            setListImages(jsonData.data)
        } catch(err){
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }


    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="container mx-auto max-w-5xl px-2 py-6">
                <p className="block font-bold text-xl font-opensans">Genie<span className="text-primary">ART</span></p>
                <div className="mt-14">
                    <h2 className="font-bold text-xl max-w-xs mb-1">Unleash the power of AI to create stunning images.</h2>
                    <p className="font-light opacity-80 hidden md:inline-block">Created with AI-powered image generation technology</p>
                    <form className="relative my-8 max-w-md" onSubmit={submitHandler}>
                        <input onChange={changeHandler} type="text" value={userInput}className="indent-2 py-4 pr-[4.5rem] rounded-sm bg-gray-50 w-full md:max-w-md focus:ring-primary outline-none focus:ring-1" placeholder="Unleash the power of AI"/>
                        <button type="submit" className='absolute bottom-2.5 right-2.5 bg-primary text-white px-2 py-2 rounded-sm text-sm'>
                            <ArrowLongRightIcon className='h-6' />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}   