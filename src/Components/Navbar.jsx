import React from "react";

function Navbar({data}) {
    return (
        <div className="w-15 px-10 py-1 flex items-center justify-between">
            <h1>Orange</h1>
            <div className="px-3 py-1 bg-orange-500 rounded-md flex gap-1 text-white">
                <h2>Favorite</h2>
                <h2>{data.filter(item=> (item.added)).length}</h2>
            </div>
        </div>
    )
}

export default Navbar;