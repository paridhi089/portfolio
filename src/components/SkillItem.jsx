import CLang from '../assets/icons/CLang.svg'
const SkillItem=(props)=>{

    return(

       <div className="itemNeu justify-between flex flex-col px-6 py-6 ">
        <img className="bg-inherit w-[100px] item-center h-auto"src={props.src}></img>
        <p className=" text-sm sm:text-xl break-words text-center text-white bg-inherit p-2 text-lg">{props.text} </p>

       </div>
    )
}
export default SkillItem;
