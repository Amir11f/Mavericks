import image1 from '../../../public/Ellipse1101.png'
export default function Samples (){



    return(
        <>
            <div className=" w-[100%] h-[auto]  flex flex-col">
                <div className="flex flex-row w-[100%]  ">
                    <div id="homeSampleBorder"></div>
                    <div>
                        <p className="fontfamily" id="homeSampleText">نمونه کارها</p>
                    </div>
                </div>
                <div className="flex flex-row w-[100%] itme-center justify-center">
                    <div className="homeDetailBox flex flex-col item-center">
                        <div className="homeDetailBoxPicture flex self-center"></div>
                        <div className=" w-[100%] flex flex-row w-[100%] justify-end mr-[11px]">
                            <p id="fontfamily" className="homeDetailBoxTitleText text-right mr-[5px]">ساخت ربات تلگرامی</p>
                            <p id="fontfamily" className=" homeDetailBoxTitleText text-right mr-[11px]">: پروژه</p>
                        </div>
                        <p id="fontfamily" className=" homeDetailBoxTitleText text-right mr-[11px]">: توضیحات </p>
                        <p id="fontfamily" className="homeDetailBoxTitleDescription mt-[10px] mr-[11px] ml-[11px]">. این ربات ها قادر به انجام هرگونه عملیاتی در این فضا از قبیل آموزش،‌ بازی، جستجو، پخش،‌ اتصال، ادغام با سایر سرویس‌ها، محدودیت ارسال پیام در گروه…هستند</p>
                        <p id="fontfamily" className="homeDetailBoxTitleText text-right mr-[11px] ">: توسعه دهندگان </p>
                        <div className='flex flex-row relative left-[2.4rem] '>
                            <div className='personImages' id='personImage1'></div>
                            <div className='personImages' id='personImage2'></div>
                            <div className='personImages' id='personImage3'></div>
                            <div className='personImages' id='personImage4'></div>
                            <div className='personImages' id='personImage5'></div>
                        </div>
                        <div className='flex flex-row mt-[20px] ml-[19px]'>
                            <div className='star'></div>
                            <div className='star'></div>
                            <div className='star'></div>
                            <div className='halfStar'></div>
                            <div className='emptyStar'></div>
                            <p className='font-[300] text-[14px] text-[#FFFFFF] mt-[2px] ml-[8px]'>4.5</p>
                        </div>
                        <div>
                            <div className='deatailBoxBotton '>
                                <div id='leftArrow'></div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="homeDetailBox"></div>
                    <div className="homeDetailBox"></div> */}
                </div>
            </div>
        </>
    )
}