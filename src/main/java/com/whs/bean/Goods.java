package com.whs.bean;

public class Goods {
    public Goods(){}
    private Integer gid;

    private String gname;

    private Double gprice;

    private String gphoto;

    private Integer gfactory;

    private Integer saleNumber;

    private Integer audit;

    private Integer isDel;

    private String description;

    public Integer getGid() {
        return gid;
    }

    public void setGid(Integer gid) {
        this.gid = gid;
    }

    public String getGname() {
        return gname;
    }

    public void setGname(String gname) {
        this.gname = gname == null ? null : gname.trim();
    }

    public Double getGprice() {
        return gprice;
    }

    public void setGprice(Double gprice) {
        this.gprice = gprice;
    }

    public String getGphoto() {
        return gphoto;
    }

    public void setGphoto(String gphoto) {
        this.gphoto = gphoto == null ? null : gphoto.trim();
    }

    public Integer getGfactory() {
        return gfactory;
    }

    public void setGfactory(Integer gfactory) {
        this.gfactory = gfactory;
    }

    public Integer getSaleNumber(){ return saleNumber;}

    public void setSaleNumber(Integer saleNumber) {
        this.saleNumber = saleNumber;
    }

    public Integer getAudit() {
        return audit;
    }

    public void setAudit(Integer audit) {
        this.audit = audit;
    }

    public Integer getIsDel() {
        return isDel;
    }

    public void setIsDel(Integer isDel) {
        this.isDel = isDel;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Goods(String gname, Double gprice, String gphoto, Integer gfactory) {
        this.gname = gname;
        this.gprice = gprice;
        this.gphoto = gphoto;
        this.gfactory = gfactory;
    }

    @Override
    public String toString() {
        return "Goods{" +
                "gid=" + gid +
                ", gname='" + gname + '\'' +
                ", gprice=" + gprice +
                ", gphoto='" + gphoto + '\'' +
                ", gfactory=" + gfactory +
                '}';
    }

    public Goods(Integer gid, String gname, Double gprice, String gphoto, Integer gfactory) {
        this.gid = gid;
        this.gname = gname;
        this.gprice = gprice;
        this.gphoto = gphoto;
        this.gfactory = gfactory;
    }
}