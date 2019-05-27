import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Badge, Input } from 'antd';

import './index.scss';

import girl from '../../data/assets/img/girl.jpg';
import plus from '../../data/assets/img/plus.png';
import download from '../../data/assets/img/download.png';
// import { girl , download , ball  } from '../../data/assets/assetsurl';
// import { refreshPage } from '../../data/config/utils';

const Search = Input.Search;

class AppHeader extends Component {
    render() {
      

        return (
            <div className={classNames("ori-full-width ori-full-parent-height ori-flex-row ori-flex-jsb oriAppHeaderContainer")}>
                <div className="headerContentContainer">
                    <div className="ori-no-b-mrgn ori-no-l-pad ori-flex navList ori-flex-jsb">
                        <div className={classNames("searchContainer navItem")}>
                            <Search placeholder="Search Instagram" className="searchBox" />
                        </div>
                        <div className="headerRightSection ori-flex" style={{marginRight:"-380px"}}>
                            <div className="" style={{width:"50px",height:"50px"}}>
                                <img src={ girl } alt="" className="ori-img-contain" />
                            </div>
                            <div className="ori-lr-mrgn-10" style={{width:"50px",height:"50px"}}>
                                <img src={ download } alt="" className="ori-img-contain" />
                            </div>
                            <div className="" style={{width:"50px",height:"50px"}}>
                                <div className="">
                                    <img src={plus} alt="" className="ori-img-contain" />
                                </div>
                            </div>
                        </div>
                        <div className={classNames("navItem settings")} style={{marginRight:"-45px"}}>
                            <Badge className="badgeAlign">
                                <i className="material-icons ori-font-lg">settings</i>
                            </Badge>
                        </div>
                        {/*<li className={classNames("navItem")}>
                             <Dropdown overlay={
                                <Menu className="dropdownMenuList">
                                    <Menu.Item key="logout" className="ori-no-mrgn">
                                        <p onClick={() => actions.logoutUser()}>Log out</p>
                                    </Menu.Item>
                                </Menu>
                            } placement="bottomRight" trigger={['click']} style={{ display: 'flex' }}>
                                <div>
                                    <Avatar className="ori-bg-primary ori-capitalize" >{admin_fname.charAt(0)}</Avatar>
                                    <span className="ori-mobile-hidden ori-capitalize ori-l-pad-5 ori-font-medium"> {admin_fname} <Icon type="down" className="ori-l-pad-5 ori-font-md" />
                                    </span>
                                </div>
                            </Dropdown> 
                        </li>*/}
                    </div>
                </div>
            </div>
        );
    }
}

AppHeader.propTypes = {
    page_details: PropTypes.object,
    admin_details: PropTypes.object,
    actions: PropTypes.object,
};

export default AppHeader;
