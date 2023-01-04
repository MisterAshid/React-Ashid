const menu = ["PORTFOLIO", "BLOG", "CV", "STORE", "FREELANCE", "ABOUT ME", "CONTACT",];

const List = () => {
    return (
        <div>
            <ul className='ul'>
              {
                menu.map((x) =><li  className = "navList">{x}</li>)
              }
            </ul>
        </div>
    )
};

export default List;