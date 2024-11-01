const Button = ({title}:{title:string}) => {
    return ( 
        <a
        className='inline-flex items-center active:bg-green-200 border-2 border-white border-opacity-0 active:border-opacity-100  active:border-black border-dashed text-green-700 hover:text-green-900 group transition-all child:transition-all'
        href='#'>
        <h3 className='font-extrabold  border-b-2 border-opacity-0 group-hover:border-opacity-100 border-b-green-900'>
          {title}
        </h3>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='size-7 stroke-green-700  group-hover:stroke-green-900 group-hover:translate-x-1 '>
          <path
            fillRule='nonzero'
            d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
          />
        </svg>
      </a>
     );
}
 
export default Button;