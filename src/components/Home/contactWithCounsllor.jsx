


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
                <div className="flex ">
                    <div className="w-[670px] h-[392px] mt-[9rem] relative bottom-[5rem] z-40 bg-[#3369D6] rounded-[8px] border-[#FFFFFF] border-[2px] border-solid flex flex-col ">
                       <div className="flex flex-row">
                            <div className=" flex flex-col">
                                <input type="text" placeholder="شماره تلفن" className="homeSmallInput mt-[43px] ml-[36px] mb-[4px]" />                                                                               
                                <input type="text" placeholder="نوع درخواست" className="homeSmallInput mt-[14px] ml-[36px]"/>
                            </div>
                            <div className="flex flex-col ">
                                <input type="text" placeholder="نام" className="homeSmallInput mt-[43px] ml-[58px] mb-[4px]"/>
                                <input type="text" placeholder="ایمیل" className="homeSmallInput mt-[14px] ml-[58px]"/>
                            </div>
                       </div>
                        <input type="text" placeholder="... توضیحات بیشتر " className="homeBigInput"/>
                    </div>
                    <div className="contactWithUsExplanation flex flex-col relative right-[6rem] z-10">
                        <p className="contactWithUsExplanationTitle">
                            ارائه مشاوره رایگان در مورد طراحی سایت و هزینه ها   
                        </p>
                        <p className="contactWithUsExplanationText text-right self-end" >
                            . پیش از آنکه مراحل طراحی سایت آغاز شود ابتدا یک مشاوره کاملا رایگان در مورد راه اندازی سایت ارائه خواهد شد. تمامی جزئیات کار برای کارفرما توضیح داده میشود. آگاهی شما از پروسه طراحی سایت شرایطی را فراهم میکند تا بهتر بتوانید تصمیم گیری کنید. از آنجاییکه فعالیت در قالب یک وب سایت نیازمند تخصص و تجربه لازم می باشد بهتر است در ارتباط با سرمایه گذاری در این حوزه اطلاعات کافی دریافت کنید. پله های صعود را بشناسید و با موانع نیز آشنا شوید. به جهت آنکه تعرفه ها و قیمت طراحی سایت  برای همه کارفرمایان از درجه اهمیت بالایی برخوردار است به طور کامل در مورد نحوه پرداخت هزینه ها، چگونگی قیمت گذاری یا هزینه ساختن سایت توضیحات کافی داده میشود  
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}