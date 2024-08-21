export default function Home() {
  return (
    <div className="bg-lightColor">
      <div className="bg-yellowBg mb-20 flex flex-col justify-between items-center bg-bgImg bg-no-repeat bg-bgPosition">
        <div className="mt-28 flex justify-center">
          <p className="text-6xl text-center text-darkColor w-11/12 ">Let’s create something great together.</p>
        </div>
        
        <div className="flex flex-row w-10/12 mt-28 justify-between">
          <div>
            <img src="/hand-1.png"></img>
          </div>
          
          <div>
            <img src="/hand-2.png"></img>
          </div>
          
          <div>
            <img src="/hand-3.png"></img>
          </div>
          
          <div>
            <img src="/hand-4.png"></img>
          </div>
          
          <div>
            <img src="/hand-5.png"></img>
          </div>
          
          <div>
            <img src="/hand-6.png"></img>
          </div>
        </div>
      </div>
      
      <div className="w-full flex flex-col justify-center items-center gap-10 mb-20" >
        <div className="w-10/12  flex flex-col justify-center align-center" >
          <div className="w-12/12   flex flex-col justify-center align-center gap-5">
            <p className="text-2xl font-bold text-darkColor">Who we are</p>
            <p className="text-lg text-darkColor">
              We love what we do and create partnerships with our clients to ensure their digital transformation is positioned for long-term success.
              We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born.
            </p>
          </div>
        </div>
        
        <div className=" mx-auto w-10/12 flex items-center justify-center ">
          <img src="/mid-img.png" />
        </div>
      </div>
      
      <div className="w-full flex flex-col justify-center items-center gap-10 mb-20" >
        <div className="flex flex-col justify-center align-center w-10/12" >
          <p className="text-2xl text-darkColor mx-auto">Meet the heroes behind the magic</p>
        </div>
        
        <div className="mx-auto w-10/12 flex flex-row gap-10 justify-center items-center flex-wrap">
          <div className="pb-3 rounded-md shadow-2xl cursor-pointer hover:bg-gray-100">
            <div className="p-2">
              <img src="/founder-img.png"></img>
            </div>
            
            <div >
              <p className="text-2xl font-bold pl-2 text-darkColor">Ester Hovard</p>
              <p className="text-base pl-2 text-darkColor">Founder</p>
            </div>
          </div>
          
          <div className="pb-3 rounded-md shadow-2xl cursor-pointer hover:bg-gray-100">
            <div className="p-2">
              <img src="/dev-img.png"></img>
            </div>
            
            <div>
              <p className="text-2xl font-bold pl-2 text-darkColor">Cody Fisher</p>
              <p className="text-base pl-2 text-darkColor">Developer</p>
            </div>
          </div>
          <div className="pb-3 rounded-md shadow-2xl cursor-pointer hover:bg-gray-100">
            <div className="p-2">
              <img src="/designer-img.png"></img>
            </div>
            
            <div>
              <p className="text-2xl font-bold pl-2 text-darkColor">Brooklyn Simmons</p>
              <p className="text-base pl-2 text-darkColor">Designer</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-darkColor flex flex-row justify-around pb-5 pt-5 mb-10">
        <div>
          <p className="text-4xl font-bold text-yellowText">350+</p>
          <p className="text-lightColor">Clients Worldwide</p>
        </div>
        
        <div>
          <p className="text-4xl font-bold text-yellowText">20+</p>
          <p className="text-lightColor">Team Members</p>
        </div>
        
        <div>
          <p className="text-4xl font-bold text-yellowText">100+</p>
          <p className="text-lightColor">Projects Completed</p>
        </div>
        
        <div>
          <p className="text-4xl font-bold text-yellowText">85M+</p>
          <p className="text-lightColor">Revenue Generated</p>
        </div>
      </div>
      
      <div className="flex flex-row justify-center items-center  ">
        <div className="w-10/12 flex flex-wrap justify-around items-center">
          <div className="relative flex justify-center w-96 h-auto mb-5">
            <img src="/bg-img.png" className=""></img>
            <img src="/people-img.png " className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96" ></img>
          </div>
          
          <div className="w-96 mb-5" >
            <div className="mx-auto flex justify-end">
              <p className="text-2xl w-1/2">We'd love to hear from you</p>
            </div>
            
            <div >
              <form>
                <div className="flex justify-center items-center mt-5 ">
                  <input type="text" name="name" placeholder="Name*" className="w-11/12 pl-3 h-16 border-solid border-2 border-darkColor" />
                </div>
                
                <div className="flex justify-center items-center mt-5">
                  <input type="email" name="email" placeholder="Email*" className="w-11/12 pl-3 h-16 border-solid border-2 border-darkColor" />
                </div>
                
                <div className="flex justify-center items-center mt-5">
                  <input type="text" name="url" placeholder="Website URL*" className="w-11/12 pl-3 h-16 border-solid border-2 border-darkColor " />
                </div>
                
                <div className="flex justify-center items-center mt-5">
                  <textarea type="text" name="detail" placeholder="Project Details*" className="w-11/12 pl-3 h-40 border-solid border-2 border-darkColor" />
                </div>
              </form>
            </div>
            
            <div className="flex justify-center items-center mt-5 mb-5 ">
              <button className="bg-darkColor w-11/12 pl-3 h-12 text-lightColor hover:bg-lightColor hover:text-darkColor border-2 border-darkColor">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
