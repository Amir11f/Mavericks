


export function ContactWithUs(){


    return(
        <>
            <div className="h-[40rem] relative">
                <div className="HomeCantactNavnar flex flex-row justify-between">
                    <div className="homeContactNavbarBotton flex justify-center self-center ml-[66px]">
                        <p className="homeContactNavbarBottonText flex self-center ">
                            مشاوره  
                        </p>
                    </div>
                    <p className="homeContentNavbarText flex self-center ml-[2rem]">
                        ارتباط با کارشناسان ومشاوره رایگان  
                    </p>
                    <div className="flex item-end justify-end mr-[1rem]">
                        <div className='flex flex-row relative left-[2.4rem] self-center '>
                            <img src="/Ellipse1101.png" className='personImagesClass' id='personImage11'></img>
                            <img src="Ellipse1100.png" className='personImagesClass' id='personImage22'></img>
                            <img src="Ellipse1099.png" className='personImagesClass' id='personImage33'></img>
                            <img src="Ellipse1098.png" className='personImagesClass' id='personImage44'></img>
                            <img src="Ellipse1097.png" className='personImagesClass' id='personImage55'></img>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="w-[670px] h-[392px] bg-[#3369D6] rounded-[8px] border-[#FFFFFF] border-[2px] border-solid flex flex-col ">
                       <div className="flex flex-row">
                            <div className=" flex flex-col">
                                <input type="text" />
                                <input type="text" />
                            </div>
                            <div className="flex flex-col ">
                                <input type="text" />
                                <input type="text" />
                            </div>
                       </div>
                        <input type="text" />
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    )
}