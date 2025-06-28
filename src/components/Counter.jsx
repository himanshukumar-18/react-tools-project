import { useState } from "react";
import { Button } from "../Input";

const Counter = () => {
    const [count, setCount] = useState(0);

    const inc = () => {
        if (count <= 19) {
            setCount(count + 1)
        }
    };

    const dec = () => {
        if (count >= 1) {
            setCount(count - 1)
        }
    };

    const reset = () => {
        setCount(0)
    };

    return (
        <>
            <div className="project-counter flex flex-col items-center w-fit bg-[#ffffff32] backdrop-blur-[10px] rounded-sm px-[20px] py-[40px] h-fit">
                <h1 className="display-count text-[#F4EAE6] text-[48px]">{count}</h1>

                <div className="mt-[20px] flex gap-5 count-btn-wrapper">
                    <Button
                        title={"Increase"}
                        className={
                            "text-[#F4EAE6] px-[26px] py-[12px] bg-[#2F5061] rounded-[50px] hover:rounded-[0px] duration-200 text-[14px] active:scale-95 count-btn"
                        }
                        click={inc}
                    />

                    <Button
                        title={"Decrease"}
                        className={
                            "text-[#F4EAE6] px-[26px] py-[12px] bg-[#2F5061] rounded-[50px] hover:rounded-[0px] duration-200 text-[14px] active:scale-95 count-btn"
                        }
                        click={dec}
                    />
                    <Button
                        title={"Reset"}
                        className={
                            "text-[#F4EAE6] px-[26px] py-[12px] bg-[#2F5061] rounded-[50px] hover:rounded-[0px] duration-200 text-[14px] active:scale-95 count-btn"
                        }
                        click={reset}
                    />
                </div>
            </div>
        </>
    );
};

export default Counter;
