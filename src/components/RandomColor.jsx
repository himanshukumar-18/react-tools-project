import React, { useState } from 'react'
import { Button } from "../Input"

const RandomColor = () => {

    const [bg, setBg] = useState('#fff')

    const color = () => {
        let code = "0123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += code[Math.floor(Math.random() * 16)]
        }

        return color;
    }

    const hamb = () => {
        let newColor = color()
        setBg(newColor)
        console.log(newColor);

    }



    return (
        <>
            <div className={`w-[400px] backdrop-blur-[10px] rounded-sm  h-[300px] flex justify-center items-end random`} style={{ backgroundColor: bg }} >
                <div>
                    <Button className={"text-[#F4EAE6] px-[26px] py-[12px] bg-[#2F5061] rounded-[50px] hover:rounded-[0px] duration-200 text-[14px] active:scale-95 count-btn mb-10"} title={"Generate"} click={hamb} />
                </div>
            </div>
        </>
    )
}

export default RandomColor

