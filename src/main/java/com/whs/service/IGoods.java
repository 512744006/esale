package com.whs.service;

import com.whs.bean.Goods;

import java.util.List;
import java.util.Map;

public interface IGoods {
    public int addGoods(Goods goods) throws Exception;

    public Goods getGoods(int gid) throws Exception;

    public List<Goods> getList(Map pageMap) throws Exception;
}
