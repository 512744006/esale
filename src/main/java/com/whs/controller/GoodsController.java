package com.whs.controller;

import com.whs.bean.Goods;
import com.whs.service.IGoods;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.beans.Expression;
import java.util.HashMap;
import java.util.List;

@Controller
@RequestMapping("/goods")
public class GoodsController {
    @Autowired
    IGoods iGoods;

    @ResponseBody
    @RequestMapping("/addGoods")
    public ModelAndView addGoods(String uid) throws Exception {
        Goods goods = new Goods("商品2",10.40,"jjjjj/jii",2);
        iGoods.addGoods(goods);
        ModelAndView mav = new ModelAndView("index");
        mav.addObject("message", "OK");
        return mav;

    }

    @RequestMapping("/getGoods")
    public ModelAndView getGoods(@RequestParam(name="gid",required = true) int gid) throws Exception{
        ModelAndView mav = new ModelAndView("index");
        mav.addObject("message",iGoods.getGoods(gid).toString());
        return mav;
    }

    @RequestMapping("/goodsList")
    public ModelAndView goodsList() throws Exception{
        HashMap<String,Integer> pageMap = new HashMap<>();
        pageMap.put("pageStart",0);
        pageMap.put("limit",10);
        ModelAndView mav = new ModelAndView("goodsList");
        List<Goods> goods = iGoods.getList(pageMap);
        mav.addObject("list",goods);
        return mav;
    }

    @RequestMapping("goodsInfo")
    public ModelAndView goodsInfo(@RequestParam(name="gid",required = true) int gid) throws Exception{
        Goods goodsInfo = iGoods.getGoods(gid);
        ModelAndView mav = new ModelAndView("goodsInfo");
        mav.addObject("info",goodsInfo);
        return mav;
    }
}
