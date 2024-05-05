import NavBarBtnSkeleton from "./NavbarBtnSkeleton";

export function NavBarSkeleton() {

    const navBtns = [
        { name: "🖋️ About", link: "/about" },
        { name: "💼 Experience", link: "/experience" },
        { name: "🚀 Projects", link: "/work" },
        { name: "📞 Contact", link: "/contact" }
    ]

    return (
        <div className="nav-container">
            <div className="right-nav">
                {navBtns.map(btn => <NavBarBtnSkeleton key={btn.name} /> )}
            </div>
        </div>
    );
}