

function Contact (){
    return(
        <>
        <h1 class='font-press-start font-medium leading-tight text-3xl'>ติดต่อทำประกัน</h1>
       <div class="flex items-center justify-center p-12">
    {/* Author: FormBold Team  */}
    {/*  Learn More: https://formbold.com */}
  <div class="mx-auto w-full max-w-[550px]">
    <form action="./success" method="GET">
        {/* name surname*/}
        <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
                <label
                for="fName"
                class="mb-3 block text-base font-medium text-[#07074D] font-press-start"
                >
                ชื่อ
                </label>
                <input
                type="text"
                name="fName"
                id="fName"
                placeholder="คำนำหน้าชื่อและชื่อ"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md font-press-start"
                />
            </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
                <label
                for="lName"
                class="mb-3 block text-base font-medium text-[#07074D] font-press-start"
                >
                นามสกุล
                </label>
                <input
                type="text"
                name="lName"
                id="lName"
                placeholder="นามสกุล"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md font-press-start"
                />
            </div>
            </div>
        </div>
   
        {/*birthday  */}
        <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
                <label
                for="date"
                class="mb-3 block text-base font-medium text-[#07074D] font-press-start"
                >
                วันเดือนปีเกิด
                </label>
                <input
                type="date"
                name="date"
                id="date"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md font-press-start"
                />
            </div>
            </div> 
            <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
                <label
                for="lName"
                class="mb-3 block text-base font-medium text-[#07074D] font-press-start"
                >
                ทุนประกันที่ต้องการ
                </label>
                <input
                type="text"
                name="SumAssured"
                id="Sum Assured"
                placeholder="จำนวนเงินทุนประกันทีต้องการ"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md font-press-start"
                />
            </div>
            </div>
        </div>

         {/* ช่วงเวลาติดต่อ */}
         <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w">
                <div class="mb-5">
                <label for="product" class="mb-3 block text-base font-medium text-[#07074D] font-press-start">
                     ช่วงเวลาที่สะดวกให้ติดต่อกลับ
                 </label>
                    <select class="w-full rounded-md border border-[#e0e0e0] 
                    bg-white py-3 px-6 text-base font-medium text-[#6B7280] 
                    outline-none focus:border-[#6A64F1] focus:shadow-md font-press-start">
                        <option selected>ช่วงเวลาที่ลูกค้าสะดวกให้ติดต่อกลับ</option>
                        <option value="mondaytofriday">จันทร์-ศุกร์ ช่วง 08.00น.-17.00น.</option>
                        <option value="mondaytofridaynight">จันทร์-ศุกร์ ช่วงหลัง 18.00น</option>
                        <option value="weekend">เสาร์-อาทิตย์ ช่วง 08.00น.-17.00น.</option>
                        <option value="weekendnight">เสาร์-อาทิตย์ ช่วงหลัง 18.00น.</option> 
                        <option value="all">สะดวกทุกช่วง</option>
                    </select>
                </div>
            </div>
        </div>

        {/* เบอร์ เมล */}
        <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
                <label
                for="tel"
                class="mb-3 block text-base font-medium text-[#07074D] font-press-start"
                >
                เบอร์โทร
                </label>
                <input
                type="text"
                name="tel"
                id="tel"
                placeholder="เบอร์โทร"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md font-press-start"
                />
            </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
                <label
                for="email"
                class="mb-3 block text-base font-medium text-[#07074D] font-press-start"
                >
                อีเมล
                </label>
                <input
                type="email"
                name="email"
                id="email"
                placeholder="อีเมล"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md font-press-start"
                />
            </div>
            </div>
        </div>
        
        {/* แผนประกัน */}
        <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w">
                <div class="mb-5">
                <label for="product" class="mb-3 block text-base font-medium text-[#07074D] font-press-start">
                     แผนประกันที่สนใจ
                 </label>
                    <select class="w-full rounded-md border border-[#e0e0e0] 
                    bg-white py-3 px-6 text-base font-medium text-[#6B7280] 
                    outline-none focus:border-[#6A64F1] focus:shadow-md font-press-start">
                        <option selected>แบบประกันที่สนใจ</option>
                        <option value="saving105par">บีแอลเอ แฮปปี้เซฟวิ่ง 10&#47;5 &#40;มีปันผล&#41;</option>                    
                        <option value="saving147par">บีแอลเอ แฮปปี้เซฟวิ่ง 14&#47;7 &#40;มีปันผล&#41;</option>
                        <option value="saving168par">บีแอลเอ แฮปปี้เซฟวิ่ง 16&#47;8 &#40;มีปันผล&#41;</option>
                        <option value="saving1810par">บีแอลเอ แฮปปี้เซฟวิ่ง 18&#47;10 &#40;มีปันผล&#41;</option>
                        <option value="saving2515par">บีแอลเอ แฮปปี้เซฟวิ่ง 25&#47;5 &#40;มีปันผล&#41;</option>
                        <option value="saving9910par">บีแอลเอ แฮปปี้เซฟวิ่ง 99&#47;10 &#40;มีปันผล&#41;</option>
                        <option value="saving995par">บีแอลเอ แฮปปี้เซฟวิ่ง 99&#47;5 &#40;มีปันผล&#41;</option>
                        <option value="saving208">บีแอลเอ แฮปปี้เซฟวิ่ง 208 </option>
                        <option value="saving126">บีแอลเอ แฮปปี้เซฟวิ่ง 126 </option>
                        <option value="bkk118">กรุงเทพ 118 </option>
                    </select>
                </div>
            </div>
        </div>


      {/* submit form */}
      <div>
        <button
          class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none font-press-start"
        >
          Submit
        </button>
      </div>
    </form>
    
  </div>
</div>
        </>

    );
}export default Contact;