import moment from "moment";

export default function NewsItem({item}) {



    return(
        <>
            <div className="bg-white shadow rounded-[4px] w-[full] h-[191px] py-[16px] pr-[17px] pl-[23px]">
        <div className="flex items-center space-x-[18px] mb-[8px]">
          <div className="flex-1 text-[#072D4B] w-[183px] h-[123px] overflow-hidden break-words text-ellipsis">
            <div className="mb-[9px] font-medium w-full w-full  text-[17px] leading-[24px]">
              {item.title}
            </div>
            <div className="leading-[22px] text-[14px] w-full text-[rgba(7,45,75,.6)]">
              {item.description}
            </div>
          </div>
          <div className="w-[134px] h-[132px]">
            <img
              className="w-full h-full object-cover rounded-[4px]"
              src={item.photo}
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex text-[12px] leading-[22px] items-center text-[rgba(7,45,75,.4)]">
            <div className="mr-[9px]">{item.author.agency}</div>
            <div className="mr-[8px] bg-[#2F9FF8] size-[3px] rounded-[100%]" />
            <div>{moment(item.published_date).fromNow()}</div>
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
        </>
    )
}