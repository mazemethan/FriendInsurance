import Banner1 from '../pic/banner1.jpg';
import Banner2 from '../pic/banner2.gif';
import Pink from'../pic/id44.jpg';

function Main (){
    return(
        <>
        <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
   
                </div>
                <div class="carousel-inner relative w-full overflow-hidden">
                    <div class="carousel-item active float-left w-full">
                    <img
                        src={Banner1}
                        class="block w-full"
                        alt="Wild Landscape"
                    />
                    </div>
                    <div class="carousel-item float-left w-full">
                    <img
                        src={Banner2}
                        class="block w-full"
                        alt="Camera"
                    />
                    </div>
                </div>
                <button
                    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        <br/>
       
        {/* agent section */}
        <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2 bg-indigo-300">
                    <div class="mb-5 ">
                        <div class="text-center gap-4 content-between ">
                                <img
                                    src={Pink}
                                    class="rounded-full w-32 mb-4 mx-auto"
                                    alt="Pink"
                                />
                                <h5 class="text-xl font-medium leading-tight mb-2 font-press-start">ภัทรนันท์ นราพินิจ พิ้ง</h5>
                                <p class="text-black font-press-start">ตัวแทนประกันชีวิต</p>
                                <p class="text-black font-press-start">เลขที่ใบอนุญาต 6501034672</p>
                                <p class="text-black font-press-start">เบอร์โทร 064-9839419</p>
                        </div>
                    </div>
                </div>
                <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                        <a href="./product.jsx">
                            <img class="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description"/>
                        </a>
                            <figcaption class="absolute px-4 text-lg text-white bottom-6">
                                <p class="font-press-start">View All Savings Insurance Product</p>
                            </figcaption>
                </figure>
        </div>
       
                
    </>

    );
}export default Main;