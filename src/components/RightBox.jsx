export default function RightBox() {
    return(
        <>
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
      in Delhi closer to Rs 100 per litre-mark. The petrol price in the national
      capital soared to Rs 99.9 a litre and diesel was priced at Rs 89.4 per
      litre, according to Bharat Petroleum's price listing.
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
    )
}