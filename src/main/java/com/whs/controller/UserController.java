package com.whs.controller;

import com.whs.service.IUserSrv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by lenovo on 2019/11/9.
 */
@Controller
public class UserController {

    @Autowired
    IUserSrv userSrv;

    @ResponseBody
    @RequestMapping("/getUser")
    public ModelAndView getUser(String uid) throws Exception {
        ModelAndView mav = new ModelAndView("index");
        mav.addObject("message", userSrv.queryUserById("7").toString());
        return mav;

    }
}
