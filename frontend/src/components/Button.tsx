export const Button = ({ onClick, children }: { onClick: () => void, children: React.ReactNode }) => {
    return <div>
        <button onClick={ onClick }   className="bg-green-500 hover:bg-green-700 text-white font-bold px-5 rounded py-3 ">
            {children}
        </button>
    </div>
}