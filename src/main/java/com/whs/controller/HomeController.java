package com.whs.controller;

import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.servlet.ModelAndView;

/**
 * Created by lenovo on 2019/10/27.
 */
@org.springframework.stereotype.Controller
//@SpringBootApplication
@RequestMapping(value="/home")
public class HomeController {

    @RequestMapping(value="/a")
    public String home() {
        System.out.println("redirect to home page123!");


        return "index";
    }
//    @Override
//    public ModelAndView handleRequest(javax.servlet.http.HttpServletRequest httpServletRequest, javax.servlet.http.HttpServletResponse httpServletResponse) throws Exception {
//
//        System.out.println("web in");
//        ModelAndView mav = new ModelAndView("index.jsp");
//        mav.addObject("message", "Hello Spring MVC");
//
//
//
//        return mav;
//    }
        @RequestMapping("/mvc1")
        public ModelAndView mvc1() {
            System.out.println("web in");
        ModelAndView mav = new ModelAndView("index");
        mav.addObject("message", "Hello Spring MVC");
            return mav;
        }
    @RequestMapping(value="/webs")
    public String home1() {
        System.out.println("redirect to home page!");
        return "index";
    }
}
