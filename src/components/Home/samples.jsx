

export default function Samples (){



    return(
        <>
            <div className="reletive w-[100%] h-[auto] flex flex-col">
                <div className="flex flex-row w-[100%]  ">
                    <div id="homeSampleBorder"></div>
                    <div>
                        <p className="" id="homeSampleText">نمونه کارها</p>
                    </div>
                </div>
                <div className="flex flex-row w-[100%] itme-center justify-center">
                    <div className="homeDetailBox flex flex-col item-center">
                        <div className="homeDetailBoxPicture flex self-center"></div>
                        <div className=" w-[100%] flex flex-row w-[100%] justify-end mr-[11px]">
                            <p className="homeDetailBoxTitleText text-right">ساخت ربات تلگرامی</p>
                            <p className=" homeDetailBoxTitleText text-right mr-[11px]">: پروژه</p>
                        </div>
                    </div>
                    {/* <div className="homeDetailBox"></div>
                    <div className="homeDetailBox"></div> */}
                </div>
            </div>
        </>
    )
}