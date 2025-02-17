export default function Button({children, ...props }) {
    return <button className="px-4 py-2 
                                text-xs
                                text-stone-300
                                md:text-base rounded-md bg-stone-700 
                                hover:bg-stone-600 hover:text-stone-100" {...props}>
        {children}
    </button>
}