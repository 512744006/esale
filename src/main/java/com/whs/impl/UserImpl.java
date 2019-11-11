package com.whs.impl;

import com.whs.bean.User;
import com.whs.dao.UserMapper;
import com.whs.service.IUserSrv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
 * Created by lenovo on 2019/11/9.
 */
@Service
public class UserImpl  implements IUserSrv{

    @Autowired
    UserMapper userMapper;
    @Override
    public User queryUserById(String uid) throws Exception {
        return userMapper.selectByPrimaryKey(uid);
    }
}
