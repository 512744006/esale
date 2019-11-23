package com.whs.impl;

import com.whs.bean.Goods;
import com.whs.dao.GoodsMapper;
import com.whs.service.IGoods;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class GoodsImpl implements IGoods {
    @Autowired
    GoodsMapper goodsMapper;
    @Override
    public int addGoods(Goods goods) throws Exception {
        return goodsMapper.insertSelective(goods);
    }

    public Goods getGoods(int gid) throws Exception{
        return goodsMapper.selectByPrimaryKey(gid);
    }

    public List<Goods> getList(Map pageMage) throws Exception{
        return goodsMapper.getList(pageMage);
    }
}
