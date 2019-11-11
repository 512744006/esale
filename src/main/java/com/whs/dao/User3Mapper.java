package com.whs.dao;

import com.whs.bean.User3;

public interface User3Mapper {
    int deleteByPrimaryKey(String id);

    int insert(User3 record);

    int insertSelective(User3 record);

    User3 selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(User3 record);

    int updateByPrimaryKey(User3 record);
}