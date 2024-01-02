


export function ApplicationInput(){


    return(
        <>
            <div className="flex flex-col mt-[153px]">
            <img src="/polygon7.png" className="absolute  mt-[6rem] left-0" alt="" />
            <img src="/polygon7.png" className="absolute rotate-180 mt-[40rem] right-0" alt="" />
                <p className="applicationformText flex self-center">
                    فرم درخواست مشاوره طراحی سایت
                </p>
                <div className="applicationFormBody flex flex-col self-center mt-[40px]">
                    <p className="applicationFormBodyText flex self-center mt-[24px]">
                        لطفا فرم زیر را تکمیل نمایید، همکاران ما در سریعترین زمان با شما تماس خواهند گرفت.
                    </p>
                    <div className="flex flex-col gap-[48px] self-center mt-[22px]">
                        <div className="flex flex-row gap-[20px]">
                            <div className="text-right flex flex-col">
                                <label htmlFor="" className="applicationInputLabel">نوع وبسایت</label>
                                <input type="text" placeholder="نوع وبسایت" className="applicationformBodyInput" />
                            </div>
                            <div className="text-right flex flex-col">
                                <label htmlFor="" className="applicationInputLabel">نام برند</label>
                                <input type="text" placeholder="نام برند" className="applicationformBodyInput" />
                            </div>
                            <div className="text-right flex flex-col">
                                <label htmlFor="" className="applicationInputLabel">نام ونام خانوادگی</label>
                                <input type="text" placeholder="نام ونام خانوادگی" className="applicationformBodyInput" />
                            </div>
                        </div>
                        <div className="flex flex-row gap-[20px] relative bottom-[24px]">
                            <div className="text-right flex flex-col">
                                <label htmlFor="" className="applicationInputLabel">آدرس ایمیل</label>
                                <input type="text" placeholder="آدرس ایمیل" className="applicationformBodyInput" />
                            </div>
                            <div className="text-right flex flex-col">
                                <label htmlFor="" className="applicationInputLabel">تلفن همراه</label>
                                <input type="text" placeholder="تلفن همراه" className="applicationformBodyInput" />
                            </div>
                            <div className="text-right flex flex-col">
                                <label htmlFor="" className="applicationInputLabel">تلفن ثابت</label>
                                <input type="text" placeholder="نوع وبسایت" className="applicationformBodyInput" />
                            </div>
                        </div>
                    </div>
                    <input type="text" placeholder="... توضیحات بیشتر " className="applicationFormBigInput flex self-center mt-[30px]" />
                    <div className="applicationFormBotton flex self-center justify-center mt-[20px]">
                        <p className="applicationFormBottonText flex self-center ">
                            ارسال درخواست
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}