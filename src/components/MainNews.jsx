export default function MainNews(){
    return <>
        <>
  <div className="w-[260px] pt-[21px] pb-[16px] pr-[17px]">
    <div className="flex items-center gap-[15px] ml-[31px] mb-[28px] relative">
      <div className="w-[29px] h-[35px]">
        <img
          className="w-full h-full object-cover"
          src="./assets/images/aster-news-logo.svg"
          alt=""
        />
      </div>
      <div className="text-[#0768B5] font-bold text-[18px] leading-[21px]">
        Aster News
      </div>
      <a href="#" className="absolute inset-0" />
    </div>
    <div className="flex flex-col text-[#072D4B] text-[15px] leading-[18px] font-normal">
      <div className="h-[50px] text-[rgba(47,159,248,1)] rounded-r-full flex items-center space-x-[12px] pl-[33px] cursor-pointer bg-[rgba(47,159,248,0.1)]">
        <div className="flex items-center gap-x-[21px] relative font-bold">
          <div className="bg-[rgba(47,159,248,1)] size-[6px] rounded-full absolute left-[-15px]" />
          <div className="text-[24px]">
            <i className="fa fa-home" />
          </div>
          <div className="whitespace-nowrap">Top Stories</div>
        </div>
      </div>
      <div className="h-[50px] flex items-center pl-[33px] cursor-pointer">
        <div className="flex items-center space-x-[21px]">
          <div className="text-[24px]">
            <i className="fa-solid fa-globe" />
          </div>
          <div className="whitespace-nowrap">Around the World</div>
        </div>
      </div>
      <div className="h-[50px] flex items-center pl-[33px] cursor-pointer">
        <div className="flex items-center space-x-[21px]">
          <div className="text-[24px]">
            <i className="fa fa-briefcase" />
          </div>
          <div className="whitespace-nowrap">Business</div>
        </div>
      </div>
      <div className="h-[50px] flex items-center pl-[33px] cursor-pointer">
        <div className="flex items-center space-x-[21px]">
          <div className="text-[24px]">
            <i className="fa-solid fa-chart-line" />
          </div>
          <div className="whitespace-nowrap">Health</div>
        </div>
      </div>
      <div className="h-[60px] flex items-center pl-[33px] cursor-pointer border-x-1 border-y-[0.2px] border-[rgba(7,45,75,.6)]">
        <div className="flex items-center space-x-[21px]">
          <div className="text-[24px]">
            <i className="fa-solid fa-shield" />
          </div>
          <div className="whitespace-nowrap">Covid 19</div>
        </div>
      </div>
      <div className="h-[50px] flex items-center pl-[33px] cursor-pointer">
        <div className="flex items-center space-x-[21px]">
          <div className="text-[24px]">
            <i className="fa-regular fa-circle-play" />
          </div>
          <div className="whitespace-nowrap">Entertainment</div>
        </div>
      </div>
      <div className="h-[50px] flex items-center pl-[33px] cursor-pointer">
        <div className="flex items-center space-x-[21px]">
          <div className="text-[24px]">
            <i className="fa-solid fa-award" />
          </div>
          <div className="whitespace-nowrap">Sports</div>
        </div>
      </div>
      <div className="h-[50px] flex items-center pl-[33px] cursor-pointer">
        <div className="flex items-center space-x-[21px]">
          <div className="text-[24px]">
            <i className="fa-regular fa-comment" />
          </div>
          <div className="whitespace-nowrap">Discussion</div>
        </div>
      </div>
      <div className="h-[50px] flex items-center pl-[33px] cursor-pointer">
        <div className="flex items-center space-x-[21px]">
          <div className="text-[24px]">
            <i className="fa-regular fa-bell" />
          </div>
          <div className="whitespace-nowrap">Notification</div>
        </div>
      </div>
      <div className="h-[50px] flex items-center pl-[33px] cursor-pointer">
        <div className="flex items-center space-x-[21px]">
          <div className="text-[24px]">
            <i className="fa-solid fa-gear" />
          </div>
          <div className="whitespace-nowrap">News Feed Settings</div>
        </div>
      </div>
    </div>
    <div className="fixed bottom-3 ml-[16px] text-white rounded-[4px] py-[19px] px-[20px] mt-[120px] w-[227px] h-[123px] bg-[rgba(47,159,248,1)]">
      <div className="flex gap-x-[15px] items-center mb-[11px]">
        <span>
          <i className="text-[24px] fa-solid fa-gift" />
        </span>
        <span className="whitespace-nowrap font-normal text-[15px] leading-[18px]">
          Subscribe to Premium
        </span>
      </div>
      <div className="flex gap-x-[22px]">
        <span className="font-normal text-[15px] leading-[18px]">
          <b className="text-[30px] leading-[35px]">$8</b>/m
        </span>
        <button className="py-[10px] px-[27px] bg-[rgba(7,104,181,1)] rounded-[4px] text-[15px] leading-[18px]">
          Upgrade
        </button>
      </div>
    </div>
  </div>
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
    <div className="text-[#072D4B] font-bold text-[26px] leading-[34px] mb-[14px]">
      Leak: Samsung to announce the Z Fold 3 and Galaxy Watch 4 in August
    </div>
    <div className="flex gap-x-[9px] mb-[21px]">
      <button className="text-[#2F9FF8] bg-[rgba(47,159,248,.1)] rounded-[4px] py-[4px] px-[11px]">
        Tech
      </button>
      <button className="text-[#2F9FF8] bg-[rgba(47,159,248,.1)] rounded-[4px] py-[4px] px-[11px]">
        Mobile
      </button>
    </div>
    <div className="text-[17px] leading-[20px] text-[rgba(7,45,75,.6)] mb-[35px]">
      Samsung's next Unpacked event reportedly lands August 11
    </div>
    <div className="w-full h-[435px] mb-[38px]">
      <img
        className="w-full h-full object-cover object-top rounded-[4px]"
        src="https://www.sammobile.com/wp-content/uploads/2024/07/Galaxy-Z-Fold-6-colors.jpg"
        alt="the samsung z fold 6 picture"
      />
    </div>
    <div className="flex flex-col gap-y-[28px] text-[rgba(7,45,75,.6)] leading-[28px] text-[17px] mb-[35px]">
      <div className="">
        Samsung had a pretty quiet Mobile World Congress event, but it did tell
        us we’d learn more about its upcoming Google-approved smartwatch at its
        next Unpacked event. Unfortunately, the company didn’t tell us when
        exactly that would be, but a new report from Korean publication
        DigitalDaily News (via 9to5Google) claims the next Unpacked will take
        place on August 11, at 10 AM ET.
      </div>
      <div>
        <div className="mb-[10px]">
          According to the report, Samsung will be launching five devices at the
          event:
        </div>
        <div className="mb-[28px]">
          <ul
            role="list"
            className="marker:text-sky-400 list-disc pl-5 space-y-3 text-[rgba(7,45,75,.6)]"
          >
            <li>Galaxy Z Fold 3</li>
            <li>Galaxy Z Flip 3</li>
            <li>Galaxy Watch 4</li>
            <li>Galaxy Watch 4 Active</li>
            <li>Galaxy Buds 2</li>
          </ul>
        </div>
      </div>
      <div>
        Notably, the new Galaxy Watches will be Samsung’s first to not use Tizen
        OS. Google collaborated with Samsung to revamp Wear OS from the ground
        up, making it smoother and more efficient.
      </div>
      <div>
        Hopefully, the devices are able to maintain the long battery life
        Samsung’s smartwatches have been known for, while having much greater
        compatibility with smartwatch apps via Wear OS. That said, the watch
        will use a custom One UI Watch skin — because it wouldn’t be Samsung if
        it didn’t put its own twist on the software.
      </div>
      <div>
        As for the Z Fold 3, it’s expected to be a refinement of the original
        Fold’s concept without major changes to the form factor. The biggest
        change aside from the expected spec bump is that the Z Fold 3 will
        support the S-Pen.
      </div>
      <div>
        The event will reportedly be broadcast via YouTube, as per usual, and
        there is no indication the company plans to hold a concurrent physical
        event. With the rumored date a little over a month away, I’d expect an
        official announcement from Samsung within the next week or two.
      </div>
    </div>
    <div className="flex justify-center text-[rgba(7,45,75,.3)] leading-[28px] text-[12px]">
      Published July 5, 2021 - 8:16 pm IST
    </div>
    <div className="flex justify-center tex-[#072D4B] leading-[28px] text-[12px] mb-[15px]">
      by John Abraham
    </div>
    <a
      className="underline mb-[32px] flex justify-center text-[#2F9FF8] leading-[28px] text-[12px]"
      href=""
    >
      Back to top
    </a>
    <div className="flex gap-x-[13px] items-center">
      <div className="text-[#072D4B] text-[17px] font-bold leading-[20px] whitespace-nowrap">
        Add your comment
      </div>
      <div className="bg-[#072D4B] h-[0.1px] w-full" />
    </div>
    <div className="h-[96px] w-full">
      <input
        className="rounded-[4px] h-full w-full bg-[#ECF5F8] py-[12px] px-[18px] outline-none text-[15px] leading-[18px]"
        placeholder="Enter your comment here.."
        type="text"
      />
    </div>
  </div>
  <div className="w-[285px] py-[26px] pr-[34px]">
    <div className="flex items-center gap-x-[13px] justify-end text-[#072D4B] mb-[95px]">
      <div>
        <i className="text-[24px] fa-regular fa-user" />
      </div>
      <div className="text-[15px] leading-[18px]">
        <select name="profile" className="outline-none bg-transparent">
          <option value="profile">My Profile</option>
          <option value="profile">Settings</option>
        </select>
      </div>
    </div>
    <div className="bg-white shadow w-full py-[14px] px-[15px] rounded-[4px] shadow mb-[15px]">
      <div className="pb-[9px] flex justify-between items-center text-[#072D4B] border-b-[0.2px] border-[rgba(7,45,75,.6)] mb-[15px]">
        <div className="text-[15px] leading-[18px]">Coimbatore, Tamil Nadu</div>
        <div>
          <i className="text-[18px] fa-solid fa-crosshairs" />
        </div>
      </div>
      <div className="flex justify-between items-center mb-[15px]">
        <div className="text-[#072D4B]">
          <div className="text-[15px] leading-[18px] mb-[7px]">Sunny</div>
          <div className="text-[26px] font-bold leading-[30px]">31°c</div>
        </div>
        <div className="size-[52px]">
          <img
            className="size-full object-cover"
            src="./assets/images/sun.svg"
            alt=""
          />
        </div>
      </div>
      <div className="text-[12px] leading-[14px]">
        <span className="text-[#072D4B] mr-[23px]">Celsius</span>
        <span className="text-[rgba(7,45,75,.3)]">Fahrenheit</span>
      </div>
    </div>
    <div className="mb-[15px] bg-white rounded-[4px] leading-[18px] pt-[13px] px-[15px] pb-[16px] shadow">
      <div className="flex items-center gap-x-[12px] mb-[9px]">
        <div className="size-[24px]">
          <img
            className="size-full object-cover"
            src="./assets/images/feather.svg"
            alt=""
          />
        </div>
        <div className="text-[#072D4B] text-[15px]">Become a Story Writer</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-[rgba(7,45,75,.6)] text-[12px]">
          Contribute stories and start earning.
        </div>
        <button className="whitespace-nowrap rounded-[4px] text-[15px] border-[.2px] border-[#2F9FF8] text-[#2F9FF8] px-[17px] py-[10px]">
          Know More
        </button>
      </div>
    </div>
    <div className="bg-white pt-[11px] px-[15px] pb-[16px] rounded-[4px] shadow mb-[15px]">
      <div className="flex mb-[13px] items-center justify-between pb-[6px] border-b-[rgba(7,45,75,.6)] border-b-[.2px]">
        <div className="flex items-center gap-x-[14px]">
          <div>
            <i className="fa-regular fa-file-lines" />
          </div>
          <div>Quick Bytes</div>
        </div>
        <div className="flex items-center gap-x-[10px]">
          <div className="bg-[rgba(47,159,248,.2)] px-[10px] py-[8px] size-[24px] rounded-full flex items-center justify-center">
            <i className="text-white fa-solid fa-chevron-left" />
          </div>
          <div className="bg-[#2F9FF8] px-[10px] py-[8px] size-[24px] rounded-full flex items-center justify-center">
            <i className="fa-solid text-white fa-chevron-right" />
          </div>
        </div>
      </div>
      <div className="text-[rgba(7,45,75,.6)] text-[12px] leading-[20px] mb-[9px]">
        The price of petrol remained unchanged on July 6 after reaching a new
        record high on the previous day, according to a price notification by
        state-owned fuel retailers. The diesel price remained stable for the
        second consecutive day. <br />
        <br /> The increase on July 5, 35th in two months, took the petrol price
        in Delhi closer to Rs 100 per litre-mark. The petrol price in the
        national capital soared to Rs 99.9 a litre and diesel was priced at Rs
        89.4 per litre, according to Bharat Petroleum's price listing.
      </div>
      <div className="flex justify-center">
        <div className="flex items-center gap-x-[8px]">
          <div className="bg-[#2F9FF8] size-[4px] rounded-full" />
          <div className="bg-[rgba(7,45,75,.3)] size-[3px] rounded-full" />
          <div className="bg-[rgba(7,45,75,.3)] size-[3px] rounded-full" />
          <div className="bg-[rgba(7,45,75,.3)] size-[3px] rounded-full" />
          <div className="bg-[rgba(7,45,75,.3)] size-[3px] rounded-full" />
          <div className="bg-[rgba(7,45,75,.3)] size-[3px] rounded-full" />
        </div>
      </div>
    </div>
    <div className="bg-white pt-[19px] pr-[21px] pb-[23px] pl-[20px] shadow rounded-[4px]">
      <div className="text-[#072D4B] text-[15px] leading-[18px] font-normal mb-[12px]">
        Subscribe to our newsletter
      </div>
      <div className="bg-[#F4F9F8] pt-[11px] pb-[9px] border-[#072D4B] border-[0.1px] rounded-[4px] mb-[16px]">
        <input
          type="email"
          placeholder="Enter Email"
          className="text-[rgba(7,45,75,.3)] text-[15px] leading-[18px] outline-none pl-[14px] bg-transparent"
        />
      </div>
      <button className="bg-[#2F9FF8] rounded-[4px] px-[51px] font-rob text-[15px] leading-[18px] text-white py-[10px]">
        Subscribe
      </button>
    </div>
  </div>
</>

    </>
}