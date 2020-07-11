import React from 'react';

const Header = () => {
    return(
      <header>
        <div className="grid-cols-1 bg-blue-900">
            <div className="bg-blue-900 border-blue-900 border-8">
                <h1 className="text-3xl text-white font-bold">ReactJS</h1>
            </div>
            <div className="w-full block flex-grow lg:flex lg:item-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Home
                </a> 
            </div>
            </div>
        </div>
      </header>  
    );
}

export default Header;