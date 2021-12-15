import { Breadcrumb } from 'antd';
import React from 'react'
import { useLocation, Link } from 'react-router-dom';

const HeaderBreadCrumb = () => {
    const location = useLocation()
    const breadcrumbView = () => {
        const { pathname } = location;
        const pathnames = pathname.split('/').filter((item) => item)
        return (
            <div>
                <Breadcrumb>
                    {pathnames.length > 0 ? (
                        <Breadcrumb.Item>
                            <Link to="/">
                                Home
                            </Link>
                        </Breadcrumb.Item>
                    ) : (
                            <Breadcrumb.Item>
                                Home
                            </Breadcrumb.Item>
                    )}
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
                        const isLast = index === pathnames.length - 1
                        return isLast ? (
                            <Breadcrumb.Item>
                                {name}
                            </Breadcrumb.Item>
                        ) : (
                                <Breadcrumb.Item>
                                    <Link to={`${routeTo}`}>
                                        {name}
                                    </Link>
                                </Breadcrumb.Item>
                        )
                    })}
                </Breadcrumb>
            </div>
        )
    }
    return (
        <div className="breadcrumb">
            {breadcrumbView()}
        </div>
    )
}

export default HeaderBreadCrumb
