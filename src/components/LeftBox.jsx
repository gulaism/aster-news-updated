export default function LeftBox({categories}){

  const selectCategory = 'world'

    return(
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
    {categories.map((category, index) => (
      // bg-[rgba(47,159,248,0.1)] text-[rgba(47,159,248,1)] when clicked
      <div key={index} className= {`h-[50px] rounded-r-full flex items-center space-x-[12px] pl-[33px] cursor-pointer ${category.slug === selectCategory ? 'bg-[rgba(47,159,248,0.1)] text-[rgba(47,159,248,1)]' : ''}`}>
      <div className="flex items-center gap-x-[21px] relative font-bold">
        {selectCategory === category.slug ?  
          <div className="bg-[rgba(47,159,248,1)] size-[6px] rounded-full absolute left-[-15px]" /> : ''}
        <div className="text-[24px]">
          <i className="fa fa-home" />
        </div>
        <div className="whitespace-nowrap">{category.name}</div>
      </div>
    </div>
    ))}
    
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

        </>
    )
}