package com.whs.service;

import com.whs.bean.User;

/**
 * Created by lenovo on 2019/11/9.
 */
public interface IUserSrv {

    public User queryUserById(String uid) throws Exception;
}
