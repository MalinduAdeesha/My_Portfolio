import leftImg from '../Assets/top-left-img3.jpg'

const TopLeftImg = () => {
  return (
    <div className='absolute loft-0 top-0  mix-blend-hard-light z-20 w-[200px] xl:w-[400px] opacity-70'> 
    <img src={leftImg} width={250}height={250}alt=""/>
    </div>
  );
};

export default TopLeftImg;
