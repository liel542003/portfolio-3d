import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      className='flex flex-col items-center justify-center'
    >
      <span className='text-[14px] text-white font-bold mt-[40px]'>
        {progress.toFixed(2)}%
      </span>
      <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'></div>
    </Html>
  );
};

export default CanvasLoader;
