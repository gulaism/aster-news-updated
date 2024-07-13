import NewsItem from "./ui/NewsItem";

export default function MainBox({news}) {
    return(
        <>
            <div className="flex-1 mt-[15px] mb-[28px]">
  <div className="flex items-center h-[46px] justify-between gap-x-[20px] mb-[39px]">
    <div className="flex-1 h-full bg-[#ECF5F8] relative rounded-[4px] p-[14px]">
      <input
        className="w-full h-full bg-transparent outline-none placeholder-[rgba(7,45,75,0.3)] text-[15px] font-rob leading-[18px] flex items-center"
        type="text"
        placeholder="Search for news.."
      />
      <div className="absolute right-[12px] top-[14px] rgba(7,45,75,1)">
        <i className="text-[18px] fa fa-search" />
      </div>
    </div>
    <div className="border-[0.2px] border-[#072D4B] text-[#072D4B] rounded-[4px] py-[14px] w-[256px] h-full pl-[15px] pr-[7px] flex justify-between items-center">
      <div className="leading-[18px] text-[15px]">
        Latest news on{" "}
        <span className="font-medium text-[#2F9FF8]">Covid-19</span>
      </div>
      <div>
        <i className="text-[20px] fa-solid fa-arrow-right" />
      </div>
    </div>
  </div>
  <div className="text-[#072D4B] font-bold text-[20px] leading-[23px] mb-[22px]">
    Top Stories for you
  </div>
  
  <div className="mb-[40px]">
    
    <div className="grid grid-cols-2 gap-x-[19px] gap-y-[20px]">
      {news.map((item, index) => (
        <NewsItem
          key={index}
          item={item}
        />
      ))}
      
      
    </div>
  </div>
  <div className="flex items-center justify-between text-[#072D4B] mb-[12px]">
    <div className="flex items-center">
      <div className="size-[24px] mr-[13px]">
        <img
          className="size-full object-cover"
          src="./assets/images/feather.svg"
          alt=""
        />
      </div>
      <span className="text-[15px] font-bold leading-[18px]">
        Creators you should follow
      </span>
    </div>
    <div className="flex items-center gap-x-[20px]">
      <div>
        <i className="text-[rgba(7,45,75,.2)] text-[20px] fa-solid fa-arrow-left" />
      </div>
      <div>
        <i className="text-[20px] fa-solid fa-arrow-right" />
      </div>
    </div>
  </div>
  <div className="flex items-center justify-between gap-x-[15px] mb-[44px]">
    <div className="bg-white rounded-[4px] p-[13px] w-[142px] h-[185px] shadow text-[rgba(7,45,75,1)] text-center">
      <div className="mb-[7px] size-[70px] inline-flex justify-center">
        <img
          className="size-full rounded-full object-cover"
          src="https://images.unsplash.com/photo-1623184663110-89ba5b565eb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwc21pbGluZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <div className="font-medium text-[14px] leading-[24px]">Shan Teylor</div>
      <div className="text-[12px] text-[rgba(7,45,75,.4)] leading-[22px] mb-[7px]">
        Tech Mint
      </div>
      <button className="bg-[#2F9FF8] text-white py-[7px] px-[33px] rounded-[4px] text-[15px] leading-[18px]">
        Follow
      </button>
    </div>
    <div className="bg-white rounded-[4px] p-[13px] w-[142px] h-[185px] shadow text-[rgba(7,45,75,1)] text-center">
      <div className="mb-[7px] size-[70px] inline-flex justify-center">
        <img
          className="size-full rounded-full object-cover"
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFuJTIwc21pbGluZyUyMGZha2V8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <div className="font-medium text-[14px] leading-[24px]">Mary Angela</div>
      <div className="text-[12px] text-[rgba(7,45,75,.4)] leading-[22px] mb-[7px]">
        Live Mint
      </div>
      <button className="bg-[#2F9FF8] text-white py-[7px] px-[33px] rounded-[4px] text-[15px] leading-[18px]">
        Follow
      </button>
    </div>
    <div className="bg-white rounded-[4px] p-[13px] w-[142px] h-[185px] shadow text-[rgba(7,45,75,1)] text-center">
      <div className="mb-[7px] size-[70px] inline-flex justify-center">
        <img
          className="size-full rounded-full object-cover"
          src="https://images.unsplash.com/photo-1544168190-79c17527004f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXNpYW4lMjBtYW58ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <div className="font-medium text-[14px] leading-[24px]">Kyon Cho Chi</div>
      <div className="text-[12px] text-[rgba(7,45,75,.4)] leading-[22px] mb-[7px]">
        Bizz Daily
      </div>
      <button className="bg-[#2F9FF8] text-white py-[7px] px-[33px] rounded-[4px] text-[15px] leading-[18px]">
        Follow
      </button>
    </div>
    <div className="bg-white rounded-[4px] p-[13px] w-[142px] h-[185px] shadow text-[rgba(7,45,75,1)] text-center">
      <div className="mb-[7px] size-[70px] inline-flex justify-center">
        <img
          className="size-full rounded-full object-cover"
          src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwbG9va2luZyUyMGxpa2UlMjBzZXJpYWwlMjBraWxsZXJ8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <div className="font-medium text-[14px] leading-[24px]">
        Paul Livingstone
      </div>
      <div className="text-[12px] text-[rgba(7,45,75,.4)] leading-[22px] mb-[7px]">
        Sport Biz
      </div>
      <button className="bg-[#2F9FF8] text-white py-[7px] px-[33px] rounded-[4px] text-[15px] leading-[18px]">
        Follow
      </button>
    </div>
    <div className="bg-white rounded-[4px] p-[13px] w-[142px] h-[185px] shadow text-[rgba(7,45,75,1)] text-center">
      <div className="mb-[7px] size-[70px] inline-flex justify-center">
        <img
          className="size-full rounded-full object-cover"
          src="https://images.unsplash.com/photo-1440589473619-3cde28941638?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWFuJTIwd2l0aCUyMGhpZGphYnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <div className="font-medium text-[14px] leading-[24px]">Sara Jay</div>
      <div className="text-[12px] text-[rgba(7,45,75,.4)] leading-[22px] mb-[7px]">
        Radar 52
      </div>
      <button className="bg-[#2F9FF8] text-white py-[7px] px-[33px] rounded-[4px] text-[15px] leading-[18px]">
        Follow
      </button>
    </div>
  </div>
  <div className="grid grid-cols-2 gap-x-[19px] gap-y-[20px] mb-[44px]">
    <div className="bg-white shadow rounded-[4px] w-[full] h-[191px] py-[16px] pr-[17px] pl-[23px]">
      <div className="flex items-center space-x-[18px] mb-[8px]">
        <div className="flex-1 text-[#072D4B] w-[183px] h-[123px] overflow-hidden break-words text-ellipsis">
          <div className="mb-[9px] font-medium w-full w-full  text-[17px] leading-[24px]">
            INDvENG Tests to be played in front of crowd
          </div>
          <div className="leading-[22px] text-[14px] w-full  text-[rgba(7,45,75,.6)]">
            The 5-Test series between India &amp; England is set to be played in
            front of packed..
          </div>
        </div>
        <div className="w-[134px] h-[132px]">
          <img
            className="w-full h-full object-cover rounded-[4px]"
            src="https://plus.unsplash.com/premium_photo-1681823111313-60e82cbd7f32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGVuZ2luZWVyJTIwbWVufGVufDB8fDB8fHww"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex text-[12px] leading-[22px] items-center text-[rgba(7,45,75,.4)]">
          <div className="mr-[9px]">Sport Biz</div>
          <div className="mr-[8px] bg-[#2F9FF8] size-[3px] rounded-[100%]" />
          <div>7 hours ago</div>
        </div>
        <div className="flex items-center">
          <div className="flex text-[12px] leading-[22px] items-center gap-x-[8px] mr-[25px] text-[#0768B5]">
            <i className="text-[16px] fa-solid fa-arrow-up-from-bracket" />
            <span>Share</span>
          </div>
          <div className="flex text-[12px] leading-[22px] items-center gap-x-[8px] text-[#0768B5]">
            <i className="text-[16px] fa-brands fa-get-pocket" />
            <span>Read Later</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white shadow rounded-[4px] w-[full] h-[191px] py-[16px] pr-[17px] pl-[23px]">
      <div className="flex items-center space-x-[18px] mb-[8px]">
        <div className="flex-1 text-[#072D4B] w-[183px] h-[123px] overflow-hidden break-words text-ellipsis">
          <div className="mb-[9px] font-medium w-full w-full  text-[17px] leading-[24px]">
            The 10 Coolest Wearable Tech Gadgets Of 2021 (So Far)
          </div>
          <div className="leading-[22px] text-[14px] w-full  text-[rgba(7,45,75,.6)]">
            Driven by demand for connected earbuds and a..
          </div>
        </div>
        <div className="w-[134px] h-[132px]">
          <img
            className="w-full h-full object-cover rounded-[4px]"
            src="https://plus.unsplash.com/premium_photo-1681147547346-2d73c90988d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2VhcmFibGUlMjB0ZWNoJTIwZ2FkZ2V0fGVufDB8fDB8fHww"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex text-[12px] leading-[22px] items-center text-[rgba(7,45,75,.4)]">
          <div className="mr-[9px]">The Mint</div>
          <div className="mr-[8px] bg-[#2F9FF8] size-[3px] rounded-[100%]" />
          <div>7 hours ago</div>
        </div>
        <div className="flex items-center">
          <div className="flex text-[12px] leading-[22px] items-center gap-x-[8px] mr-[25px] text-[#0768B5]">
            <i className="text-[16px] fa-solid fa-arrow-up-from-bracket" />
            <span>Share</span>
          </div>
          <div className="flex text-[12px] leading-[22px] items-center gap-x-[8px] text-[#0768B5]">
            <i className="text-[16px] fa-brands fa-get-pocket" />
            <span>Read Later</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white shadow rounded-[4px] w-[full] h-[191px] py-[16px] pr-[17px] pl-[23px]">
      <div className="mb-[9px] font-medium w-full w-full  text-[17px] leading-[24px]">
        Biden's cold response to Afghanistan's collapse to have far consequences
      </div>
      <div className="leading-[22px] text-[14px] w-full  text-[rgba(7,45,75,.6)] mb-[20px]">
        When US President Joe Biden chose in April to withdraw all American
        forces from Afghanistan by September, we were among those who judged..
      </div>
      <div className="flex justify-between items-center">
        <div className="flex text-[12px] leading-[22px] items-center text-[rgba(7,45,75,.4)]">
          <div className="mr-[9px]">Radar 52</div>
          <div className="mr-[8px] bg-[#2F9FF8] size-[3px] rounded-[100%]" />
          <div>8 hours ago</div>
        </div>
        <div className="flex items-center">
          <div className="flex text-[12px] leading-[22px] items-center gap-x-[8px] mr-[25px] text-[#0768B5]">
            <i className="text-[16px] fa-solid fa-arrow-up-from-bracket" />
            <span>Share</span>
          </div>
          <div className="flex text-[12px] leading-[22px] items-center gap-x-[8px] text-[#0768B5]">
            <i className="text-[16px] fa-brands fa-get-pocket" />
            <span>Read Later</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white shadow rounded-[4px] w-[full] h-[191px] py-[16px] pr-[17px] pl-[23px]">
      <div className="flex items-center space-x-[18px] mb-[8px]">
        <div className="flex-1 text-[#072D4B] w-[183px] h-[123px] overflow-hidden break-words text-ellipsis">
          <div className="mb-[9px] font-medium w-full w-full  text-[17px] leading-[24px]">
            Hardik Pandya 'is bowling and it is a very good sign' - Suryakumar
          </div>
          <div className="leading-[22px] text-[14px] w-full  text-[rgba(7,45,75,.6)]">
            I think that the team management and Hardik..
          </div>
        </div>
        <div className="w-[134px] h-[132px]">
          <img
            className="w-full h-full object-cover rounded-[4px]"
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vdGJhbGxlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex text-[12px] leading-[22px] items-center text-[rgba(7,45,75,.4)]">
          <div className="mr-[9px]">Cric Mint</div>
          <div className="mr-[8px] bg-[#2F9FF8] size-[3px] rounded-[100%]" />
          <div>9 hours ago</div>
        </div>
        <div className="flex items-center">
          <div className="flex text-[12px] leading-[22px] items-center gap-x-[8px] mr-[25px] text-[#0768B5]">
            <i className="text-[16px] fa-solid fa-arrow-up-from-bracket" />
            <span>Share</span>
          </div>
          <div className="flex text-[12px] leading-[22px] items-center gap-x-[8px] text-[#0768B5]">
            <i className="text-[16px] fa-brands fa-get-pocket" />
            <span>Read Later</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-center mb-[79px]">
    <button className="border-[0.2px] border-[#072D4B] rounded-[4px] py-[10px] px-[21px] text-[#072D4B] text-[15px] leading-[18px] text-center">
      Show More
    </button>
  </div>
  <div className="bg-[rgba(7,45,75,.4)] w-full h-[0.1px] mb-[23px]" />
  <div className="text-[rgba(7,45,75,.4)] text-[12px] leading-[22px] flex justify-between items-center mb-[29px]">
    <div>© Aster News, 2022</div>
    <div className="flex items-center gap-x-[38px]">
      <div>Privacy Policy</div>
      <div>Terms of Service</div>
    </div>
  </div>
</div>

        </>
    )
}