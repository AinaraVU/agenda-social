/* Agenda social Euskadi · Silván & Miracle
   Los datos NO están aquí: se cargan desde data.json (ver index.html). */
const DATA = window.DATA;
const SM_LOGO_REDUCIDO_URI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUsAAAB2CAYAAABBJLFZAAAWfmNhQlgAABZ+anVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAAFlhqdW1iAAAAR2p1bWRjMm1hABEAEIAAAKoAOJtxA3VybjpjMnBhOmE0NDNiOTcwLTVlY2EtNDNkMy1hNjM1LTJkNDFkNGJmYTkyYwAAAAOTanVtYgAAAClqdW1kYzJhcwARABCAAACqADibcQNjMnBhLmFzc2VydGlvbnMAAAAAuGp1bWIAAABEanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5pbmdyZWRpZW50LnYzAAAAABhjMnNo1CIiKoSgv1JfE6wZ4Nb2WgAAAGxjYm9yo2lkYzpmb3JtYXRpaW1hZ2UvcG5namluc3RhbmNlSUR4LHhtcDppaWQ6NzI2NjZhZDctY2Q1Ni00Yjk5LTk5ZmItZTc2ZDNiMWIxMDZibHJlbGF0aW9uc2hpcGhwYXJlbnRPZgAAAeJqdW1iAAAAQWp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuYWN0aW9ucy52MgAAAAAYYzJzaKAxnta59T0i4POuN2v5gA8AAAGZY2JvcqJnYWN0aW9uc4KiZmFjdGlvbmtjMnBhLm9wZW5lZGpwYXJhbWV0ZXJzoWtpbmdyZWRpZW50c4GiY3VybHgtc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5pbmdyZWRpZW50LnYzZGhhc2hYIEUa6rCbKzf+X7SpPx7TtudlPUlUcxJE9WL1uj4lqxfRpGZhY3Rpb254HWNvbS5hbnRocm9waWMuY2xhdWRlLnByb3ZpZGVkanBhcmFtZXRlcnOheB9jb20uYW50aHJvcGljLm9yaWdpbi1jb25maWRlbmNlZ3Vua25vd25rZGVzY3JpcHRpb254ZkNsYXVkZSBwcm92aWRlZCB0aGlzIGZpbGUgYXQgdGhlIHJlcXVlc3Qgb2YgYSB1c2VyIGFuZCBtYXkgaGF2ZSBjcmVhdGVkIG9yIG1vZGlmaWVkIHRoZSBmaWxlIGNvbnRlbnRzLm1zb2Z0d2FyZUFnZW50oWRuYW1lZkNsYXVkZXJhbGxBY3Rpb25zSW5jbHVkZWT1AAAAyGp1bWIAAABAanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5oYXNoLmRhdGEAAAAAGGMyc2gbaBpaJaHz1mKUqnhC/qo4AAAAgGNib3KlY2FsZ2ZzaGEyNTZjcGFkTQAAAAAAAAAAAAAAAABkaGFzaFggdQ1tQB/NDEq7Af5sLb/FebDdqxmtSB8WxS/77plliGtkbmFtZW5qdW1iZiBtYW5pZmVzdGpleGNsdXNpb25zgaJlc3RhcnQYIWZsZW5ndGgZFooAAAI+anVtYgAAACdqdW1kYzJjbAARABCAAACqADibcQNjMnBhLmNsYWltLnYyAAAAAg9jYm9ypWNhbGdmc2hhMjU2aXNpZ25hdHVyZXhNc2VsZiNqdW1iZj0vYzJwYS91cm46YzJwYTphNDQzYjk3MC01ZWNhLTQzZDMtYTYzNS0yZDQxZDRiZmE5MmMvYzJwYS5zaWduYXR1cmVqaW5zdGFuY2VJRHgseG1wOmlpZDo1MDBlOWM3NS1mODFmLTQzN2YtYTczMy00ZWQxY2Y0NWNjZDRyY3JlYXRlZF9hc3NlcnRpb25zg6JjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFggRRrqsJsrN/5ftKk/HtO252U9SVRzEkT1YvW6PiWrF9GiY3VybHgqc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5hY3Rpb25zLnYyZGhhc2hYIMgH2vt1Digk99wVIp9mzV96+9qWHk5foBIYSGqpqe69omN1cmx4KXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaGFzaC5kYXRhZGhhc2hYIEKwzgiIzU3SR2q+rjprArFHrvAC5Nfj7MISCGbG8WDrdGNsYWltX2dlbmVyYXRvcl9pbmZvo2RuYW1lb0FudGhyb3BpYyBGaWxlc2d2ZXJzaW9uZTEuMC4wa3NwZWNWZXJzaW9uZTIuNC4wAAAQOGp1bWIAAAAoanVtZGMyY3MAEQAQgAAAqgA4m3EDYzJwYS5zaWduYXR1cmUAAAAQCGNib3LShFkCEqIBJhghWQIKMIICBjCCAY2gAwIBAgIUQOWgCu7COdC+uIP6BkIFPWdVEwAwCgYIKoZIzj0EAwMwSTEXMBUGA1UEChMOQW50aHJvcGljLCBQQkMxLjAsBgNVBAMTJUFudGhyb3BpYyBDb250ZW50IENyZWRlbnRpYWxzIFJvb3QgQ0EwHhcNMjYwODA3MTg0MzU2WhcNMjgwODA2MTk0MzU2WjBEMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEpMCcGA1UEAxMgQW50aHJvcGljIENsYXVkZSBDb250ZW50IFNpZ25pbmcwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAASYegpry1AYBRTVNL1CpTlbROnY3dey+UrsF9C3phYrATN3ZHf93Mo8RQN0KOUuOn19P4oWNFWe5n2/She9N7eTo1gwVjAOBgNVHQ8BAf8EBAMCB4AwFQYDVR0lBA4wDAYKKwYBBAGD6F4CATAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFM5R4gSBTmRbI/jjxM+aPpzB11zCMAoGCCqGSM49BAMDA2cAMGQCMDFzHRSeAXrSy1WOzkbhPZ6Km2wGTmZ/2gK18k8BQGXyqz88Rdrz6CTX9flAnYNVxgIwcF9c3fVhqmJKpi+UhasNUMko69cyX6STPfta3Q8EjyzDjzoyrol46FP6VFHhvUcJoWNwYWRZDZ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD2WEAGwfrtkLeiLBbmhvWiQNyGWuq2goBcqJPK7lY14kQUlyd0KzSo3RIMcGe+2ncDbrxw3JerRJw3aAAkpy+ZWeHvKVOC2QAADnxJREFUeJztnX/MV1Udx98wZyIDSXDCgGcwdWSZPUE5KTYGSJqMUjHNlEUxmw3C9ctNZzpramvOH5vLH8NBw5rkr1kynAY9DQehEKThcKLPIpAmyyBEhLSnP87zze++nXO/93zuOedzf7xf2xns+9x77vvce7/v77nnnvP5AIQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCFNZoi2AE9GA/g0gB4AkwFMAjAcwCmDf/8PgP0ADgF4fbBsAfBaaqGEkHpRdrM8B8CVAOYCOLNgXe8BWAvgEQC/LlhXlVkJYLq2CAc7AFyiLaIBzATwoMf2CwD8JZKWvFwHYHHObTcBWBRPSnk4HcbQBiKXzQBmJ2pTmdiD+OdWWo5EbDf5EN/rMldH5v/ogZ/ePToy0zEVwC6k/4K+D2BhgvaVBZpls+lD9czyLfjpra1ZDgOwDfpf1IMAeuM2tRTQLJvLAsiui6ZZXpehq1FmeRX0v6Cd5b6oLdanzGa5N2K7m85xkF8XLbMc6aGx1ma5HPpfTlfpj9hubTrN8gVdOSQR21E9s9zhobG2ZrkB+oaYp4yIdQIUsfUs875lJNXkahT7HmiY5cICemtjls9C3wR9yrA4p0GNP8DezrGaokg0pI+y2mZZRG8tzPJG6Jufb6nbSwfX2NU7mqJINPpRPbNcV1Bv5c1yEvSNT1r6gp8NXebC3s5VmqJIcCRvkrXN8rwAeqOYZcoVPLsBTAxU1+8B7ATwMkzPb+/gv2MATAAwHmb1T8hJ51cC+FXA+rRZBTMboZMvAngmsRYSnnEA3gxU1xcAPBeorm4MBKhjL4wPVJKZKP5LsVR47KEAlsA8Zhb9xaobrnNyvKYoEoR/INyTVaqe5apAeiv9GL4V8oaH7B0W7eLfGVBLGRgHezv7NUWRwvwU4YwylVmeHVBvpc1S0uB3I+rZLNQ0EFGTFktgb+etmqKImDMQ1ihTmeWxgHora5aLIWtw7Ck764W6LousS4NNsLe1V1ETkRHSdFKZ5c8C662sWa6Bf2Ol45O+SMYx+xJpS42rvaQ6PIjwRhnbLMdH0FtZs9wN/8amYrJAW10N5BzY2/q8piiSm2mIY5SxzXJfBL2VNUvfhu5IrE+y/nRkYo2puBv29i5R1ETyEcsoY5rldyPpbYxZrkisTxK2Sju+X0xcv/TjNUWRTB5D9czyxIh6o5jl0BiVFuRw4uM9LthnanAV5WGK4/NdSVWQvMyG+cH35b3QQjzZ6Lm9+oKQMprlSdoCcvBRbQER+ReAr1o+PwEm3QcpF+sE+7wI8wZai8sBfMpj+8MowVDQcdoCLMxUOObDMC848vJ6LCElYTVMiKx5HZ9fDuCXAH6bXBGxsV643+cA/CikEE98f3SnA/h3DCFl4yj8xxy43K4cuK7PcE1RBIA8RcTFg/vf4rFPyDHLtZ56Vw/uN9xjn8q+4NkG/wv6rIpS0skU2K/PXzVFEXGKiPZHdg2znCnQ3ELdLFOMWa4V7DMXwA9CCyHevAr741oPgDsSayEf8qJwvzlBVfjT57m9bey81syC7FdwAMDtCnrJ/7MT9uvzWU1RDUW6fLjTKFP3LFd46u2cb63es0yF1CwHYAJqTEsvmbSR9dhH0iFNEfGEpa6UZnmWQPOojjrUzTLV1CHJXMYWwwBsAXAIZsY/Sc+FAPY7/sbskOn4s3C/S4Kq8Md32OAnAA5E0FEJTkax3mVn2Q0Ts29WykY0jHkwRpjneixT0tgkpCkiXEMlqXqWt3nqPeaoR71nmZLYS7LWwdxQvYnaU1euhez892iIbQiuIM3dyoqMOlOY5ViB5l5HXY0ySyCuWXaWQzAGvRj8IuehaG7p99NLbgz74X89PuhSZwqztOWozyq2sdUWjTPLc5HWMDvLVphxz5NiN7RCnA7gIPzO4y7H548l1t4EbofsXj+zS72xzXKpQHMWjTNLALgUuobZKgcBXI9mrxa6FvnO1XaYnmd7aLpnHNteDBIKaYqIu3LUHdMshwk02zKNttNIswSA+dA3y/ayA2b9aZN4Et3Py23InjHh2m9ENNXNQpIi4lDOumOa5RZPza/lqLOxZgnESaxUtLwK81had/qRfR5uzFmPaznkvsB6m4g0RcTEnPXHMkvJk+OYHPU22ixbPAV9k+wsj0ZtsS5Zg+5vwD8K/I2Ouu4JpLeJSFNE3ORxjFhm6as57yo9muUg42HGxbRNsrPU7dE8K397kfiGrtQcdTt/qZDcq769+Rhm+bRAd15olh1MgeyExyzXRG1xOn4MdxsXF6x7aEbdxA/pfOTRnscJbZYzBJp9YsjSLDP4NsxjobZZDsC8Na8yH4e7bV8LdAxXwJStgepvArMhuz8lK6hCm6Wv5jWeemmWORgCM61Au8cZylQ0OAR7mx4IfBzXS4mi4fZsddYxD5LkvtwpPFZIs5S8jPKFZilgKIALYNK2ukKHxSqfjN+84LgmB78R6XhvO45XZJZBE8xyHWT35InC44UyS9eMiKzyTYFemmUgxgFYBJPb4wDiGmbVcLXDd4wrL2MyjinFVtdpxWSWCmmKiEUFjhnKLN/x1Nwv1EuzjEgvTGCNbQhrlrckbENRroC9Db+JfNyFjuM+LazPVte44jJLgTRFRNHQeCHM0qeOVhkr1EuzTMgsmLD2IQyzKriGKfJMAi7Kc45jX+5ZzyhHPXUhazpXVikai7aoWWY9QbjKXQX00iwVOB7AQyhmllXJD2TTnmdpWczjD8AvkEmvo446IE0RcVGAYxc1y36B7iLQLBWRDEy3ylsKen1xrb+XDK5LOdOhwef82cbzjoSVqcIIyO69UJlPi5jlNQLdny+ol2ZZAo5AdtOWnRWw6z45sY6bHDruy7n/nZZ9+4KrTI90DnEopGZ5vEBzCIOnWZYAacqLixS0+vASymPyrrHTGTn23WTZr+pZP6UpIkKmUZGape16dCtDAuilWZaEe+F/A9ytIdQDW495l5KWrDe+3b5Itn3mRVMaH0mqhQGED6wsMcsvCXSHWi6sbpbHxagU5k3ZVzy2PwJgZRwpubgBwBLPfXoj6AjJCZbP9iZXYXgfwHkAfmf520twT/af4Pjcd6lcmXhZuN+lQVXIeMpz+zcB3B9DSJ2QBPfVxlfvKzoyc2PTrB16zjULwbX2fpll23fiy4yGNEXEtAhafHuWTwh0u37sJKj3LGMhSaqe+sVDJ7vhp7fsF8SmuQw5clz5fqZYtn3Fst3P08gMzumQGeXySHp8zFKy9vvewHpra5Y+DWuVbjk4YrMd9TfLoqs+QnAK3Oe0HVfYN5upVoGj8P9OxMyYKVl941NCo26WRVcBuDgs2OeK4Cr8GK98/NDYrsGk1CIs7AfwDcffnmn7/62Wv38Ak/qjajwIWWK8T4QWkog52gKqRj/0f4188NW6WUdmbp5H+c5xO64oO60nDNvfbk4vszBTIeuZ3RFZV6yeZV8kveo9y5jcA/8TbetNpECyzvURFaX5uQt23ZM1RXXgOrcPOD6PNXsjJhLDOZBAVyyzjHWN1M0y1mM4ADwu2OcGmJzDqfm+YJ8NwVWExRVZaFFKEV1wPWZ+y/LZk4g7hhcD6Qu1s4KqSMd3UL1rVBokv0ypu9BDhDqr8KLBprtsU29uRr7zLQ3tpYU0RUTeNMRFCd2zjB0vQb1nGZuVkJ34lL22XUKNVWAj7NrP1hRl4VVkn+syTHnypewdhdBmGXt4p/ZmORryk78b8pD5eXGlcO1W1kXWFQpXEjHpKpJYdAuAK3mTrIk0RUTKucYhzTJ0LicbtTdLwP1WNm+JEZn8qoKaqpT/5RjsbZitKcrCGth1vqspSsDFkN1TSxPrDGmWKWiEWY5CmAtyP4rNhTwN7jfEPqUKsSzbuQy6N3keXEnVWqUqq3akKSI0ls6GMsvzE+lthFkC5mYP9Ss2APP4vBzmrekCmLWrM2Ci0SwAcDXMi4NHIZvvmVV8EsOXhf2wt6UMc0Xz9vKnawn0QJoiQmMGSAiz3JhQb2PMEnCvCa5SiZ3oKxaT4W7TLxR1+QaWKDPSFBFf1xCLMGb5kYR6G2WWo6BvdkVK1eePuSKWD0Bngv0LGXo2OD7foqAzD9IUEZs0xA5S1Cy/l1hvo8wSkEUjKkuJlWc7JVkGlWL2AdA9R3brS+jSuiyBRl+kKSJCRBCXUsQs31bQ2zizBExsPm3j8y11yVENmBdUWW2N9VZ2GrqPHy/u2Me13cRIGiX8ELJ7ar6G2DaKmOUZCnobaZYA0AN9A8xTjkI/zmYM9qF720Ol+10Cs2qo2/HOs+w73bHt0UDainIqZPfVWg2xHUjNcqWCVqDBZtlCOnk3Ranqy5y85D33W2F6m6fmqHM4gAthIub8PWf9/ch+/HflRypDIBPXLINupQxIzVKLxpslAFwAfWNsLwcQJ4x/GZFmGTzQUaTnOm/v1TV0cKGgzaGQpoiYqSHWgsQsNYcOaJZtSBK3hyx7YH8UrDuj4R8lvmh5FH6hvLLSFWsshZSmiFitoNWFr1lqz0SgWVrohckil+JLewQmpW2ZYjxqcS7c+b1DlVUwU8gkuCava6T3laSIGFDQmYWvWaaYKZGFulmWMZjqdgBfHvx/L8yk3fkwyxWLcgzAepgoNo8jTZDVqvBHAB+DST1xPewxJaX1LofJ7FiEh2GGRz5j+dtUAH8qWH9e5kCWy8g31XJstsDEbcjDcuiv0T+M/Hqj9II153lJmQ7zGDQBZgqJrQ1HYXJk7wHwN5goOwdTCawRPTC5kc6HMaqRXbb/J8xS1LUwOcLLkCCNEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgjJ5r8N9gRNtRnlcAAAAABJRU5ErkJggg==";

/* ===================== Sistema de gráficos S&M (sin gráficos todavía) ===================== */
const SM = {
  c:{teal:"#014550",menta:"#95F1D8",naranja:"#FF723C",amarillo:"#F6BD32",lavanda:"#C7B5F3",purpura:"#8739E5",crema:"#F3EFE4",tinta:"#1A1A1A",blanco:"#FFFFFF",subtle:"#5A6B6C",grid:"#DCD8CC"},
  cat:["#014550","#FF723C","#95F1D8","#F6BD32","#C7B5F3","#8739E5"],
  catLines:["#014550","#FF723C","#8739E5","#F6BD32","#1A1A1A","#4FB5AE","#C7B5F3","#B3541E","#3FAE8E","#8C6D1F"],
  seq:["#012D33","#014550","#1E7A82","#4FB5AE","#95F1D8"],
  div:["#FF723C","#FBB089","#F3EFE4","#6FA9AC","#014550"],
  sans:'Inter, "Helvetica Neue", Arial, sans-serif', serif:'"Instrument Serif", Georgia, serif',
};
const PARTY_COLORS = {
  "EAJ-PNV":"#1B7A3D","EH Bildu":"#4FB5AE","PSE-EE (PSOE)":"#E5393B","PSOE":"#E5393B","PP":"#1E73C4",
  "Vox":"#8BC34A","VOX":"#8BC34A","Sumar":"#E5007D","Elkarrekin Podemos":"#6A2C91","Podemos":"#6A2C91",
  "Ciudadanos":"#FF8C00","ERC":"#F2B01E","Junts":"#20A39E","BNG":"#6CB4E4","CCa":"#F5D300","UPN":"#2B5AA6",
  "Se Acabó la Fiesta":"#6D4C41","PACMA":"#7FB343","NS/NC":"#7C8C8A","Otros/Blanco":"#C9C5B8"
};
function smLogoGraphic(){return {type:"image",right:6,bottom:4,z:100,silent:true,style:{image:SM_LOGO_REDUCIDO_URI,width:44,height:Math.round(44*118/331),opacity:.85}};}
function smBaseOption(){return {color:SM.catLines,backgroundColor:"#fff",animationDuration:400,textStyle:{fontFamily:SM.sans,color:SM.c.tinta},
  grid:{left:8,right:24,top:20,bottom:34,containLabel:true},tooltip:{backgroundColor:SM.c.tinta,borderWidth:0,textStyle:{color:"#fff",fontFamily:SM.sans,fontSize:12}},graphic:[smLogoGraphic()]};}
const charts={};
function mkChart(id){const el=document.getElementById(id);if(!el||typeof echarts==="undefined")return null;charts[id]=echarts.init(el,null,{renderer:"canvas"});return charts[id];}
window.addEventListener("resize",()=>Object.values(charts).forEach(c=>c.resize()));

/* Exportación PNG (capacidad downloads). Los botones se ocultan si no está disponible. */
/* En la web propia no existe claude.use: se descarga directamente con un enlace <a download>. */
let downloadsCap=null;
(async()=>{try{if(typeof claude!=="undefined"&&claude.use)downloadsCap=await claude.use("downloads");}catch(e){downloadsCap=null;}})();
async function exportChartPng(id,name){const ch=charts[id];if(!ch)return;
  const url=ch.getDataURL({type:"png",pixelRatio:2,backgroundColor:"#fff"}), fn=(name||"grafico")+".png";
  if(downloadsCap){try{const blob=await (await fetch(url)).blob();await downloadsCap.save({filename:fn,data:blob});return;}catch(e){}}
  const a=document.createElement("a");a.href=url;a.download=fn;document.body.appendChild(a);a.click();a.remove();}
document.addEventListener("click",e=>{const b=e.target.closest(".export-btn");if(b)exportChartPng(b.dataset.chart,b.dataset.name);});

/* Alto de la cabecera fija, para anclar el menú de secciones justo debajo */
function fijaHdr(){const h=document.querySelector("header.page");const fija=h&&getComputedStyle(h).position==="sticky";
  document.documentElement.style.setProperty("--hdr",(fija?h.getBoundingClientRect().height:0)+"px");}
fijaHdr(); window.addEventListener("resize",fijaHdr); if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fijaHdr);

/* ===================== Pestañas ===================== */
const MESL=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
const labL=f=>{const [y,m]=f.split("-");return `${MESL[+m-1]} ${y}`};
function showTab(t){
  document.querySelectorAll("nav.main-tabs button").forEach(b=>b.setAttribute("aria-selected",b.dataset.tab===t));
  document.querySelectorAll(".tabpanel").forEach(p=>p.hidden=p.id!=="tab-"+t);
  try{localStorage.setItem("ase.tab",t)}catch(e){}
  Object.values(charts).forEach(c=>c.resize());
}
document.querySelectorAll("nav.main-tabs button").forEach(b=>b.addEventListener("click",()=>showTab(b.dataset.tab)));
let t0="enc"; try{const s=localStorage.getItem("ase.tab"); if(s==="enc"||s==="cis"||s==="soc")t0=s;}catch(e){}
if(location.hash.startsWith("#sociometro"))t0="soc"; else if(location.hash.startsWith("#cis"))t0="cis"; else if(location.hash.startsWith("#encuestas"))t0="enc";

/* Subpestañas de cada fuente (CIS y Sociómetro) */
function showSub(src,k){
  document.querySelectorAll(`#tab-${src} nav.sub-tabs button`).forEach(b=>b.setAttribute("aria-selected",b.dataset.sub===k));
  document.querySelectorAll(`#tab-${src} .subpanel`).forEach(p=>p.hidden=p.id!==`sp-${src}-${k}`);
  try{localStorage.setItem("ase.sub"+src,k)}catch(e){}
  Object.values(charts).forEach(c=>c.resize());
}
const HASH_SRC={cis:"cis",sociometro:"soc"};
["cis","soc"].forEach(src=>{
  const btns=[...document.querySelectorAll(`#tab-${src} nav.sub-tabs button`)];
  const keys=btns.map(b=>b.dataset.sub);
  btns.forEach(b=>b.addEventListener("click",()=>showSub(src,b.dataset.sub)));
  let k0=keys[0]; try{const v=localStorage.getItem("ase.sub"+src); if(keys.includes(v))k0=v;}catch(e){}
  const [h,hs]=location.hash.slice(1).split("/"); if(HASH_SRC[h]===src&&keys.includes(hs))k0=hs;
  showSub(src,k0);
});
showTab(t0);

/* Ficha de cada fuente (datos del codebook) */
function facts(el,f){
  if(!f){el.innerHTML="";return}
  el.innerHTML=`<span><b>${f.n_oleadas}</b> ${f.unidad}</span><span>De <b>${labL(f.desde)}</b> a <b>${labL(f.hasta)}</b></span><span>Ponderación: <b>${f.peso}</b></span>`;
}
facts(document.getElementById("facts-cis"),DATA.fuentes?.cis);
facts(document.getElementById("facts-soc"),DATA.fuentes?.soc);

/* ===================== Problemas principales (módulo común CIS / Sociómetro) ===================== */
function montarProblemas(cfg){
  const P=cfg.P, PF=cfg.PF, pre=cfg.pre, grid=document.getElementById(cfg.grid); if(!P||!grid)return;
  const id=s=>`${pre}-${s}`, $=s=>document.getElementById(id(s));
  const B=cfg.bloques.map(b=>b[0]);
  grid.innerHTML=`
    <div class="ctrlbar">
      <div class="seg" id="${id("bloque")}" role="group" aria-label="Pregunta">${cfg.bloques.map((b,k)=>`<button type="button" data-v="${b[0]}" aria-pressed="${k===0}">${b[1]}</button>`).join("")}</div>
      <div class="seg" id="${id("medida")}" role="group" aria-label="Medida"><button type="button" data-v="total" aria-pressed="true">Total de menciones</button><button type="button" data-v="primero" aria-pressed="false">Primer problema</button></div>
      <label class="sel-lab">${cfg.unidad} <select id="${id("estudio")}" class="sel"></select></label>
    </div>
    <div class="card span8">
      <div class="card-head"><div><h3>Los 10 principales problemas</h3><p class="subt" id="${id("top10-subt")}"></p></div>
        <button class="export-btn" data-chart="${id("ch-top10")}" data-name="${pre}_top10" id="${id("top10-export")}" hidden>⬇ PNG</button></div>
      <div class="chart" id="${id("ch-top10")}" style="height:420px"></div>
      <p class="foot-note">Cifra junto a cada problema: % ${cfg.g.elegido}; el valor anterior y la variación aparecen al pasar el ratón. Sin ${cfg.residualesTxt}.</p>
    </div>
    <div class="card span4">
      <div class="card-head"><div><h3>Los 3 principales problemas</h3><p class="subt" id="${id("top3-subt")}"></p></div></div>
      <div class="top3" id="${id("top3")}"></div>
      <p class="foot-note">${cfg.notaTop3}</p>
    </div>
    <div class="card">
      <div class="card-head"><div><h3>Evolución de los principales problemas</h3><p class="subt" id="${id("evo-subt")}"></p></div>
        <button class="export-btn" data-chart="${id("ch-evo")}" data-name="${pre}_problemas" id="${id("evo-export")}" hidden>⬇ PNG</button></div>
      <div class="chips" id="${id("chips")}"></div>
      <div class="chart tall" id="${id("ch-evo")}"></div>
      <p class="foot-note" id="${id("evo-nota")}"></p>
      <details class="tabla"><summary>Ver los datos en tabla</summary><div class="tabla-wrap" id="${id("tabla")}"></div></details>
    </div>
    <div class="card">
      <div class="card-head"><div><h3>Los 5 principales problemas por perfil</h3><p class="subt" id="${id("mapa-subt")}"></p></div>
        <button class="export-btn" data-chart="${id("ch-mapa")}" data-name="${pre}_perfiles" id="${id("mapa-export")}" hidden>⬇ PNG</button></div>
      <div class="ctrls"><label class="sel-lab">Cruzar por <select id="${id("perfil")}" class="sel"></select></label></div>
      <div class="chart" id="${id("ch-mapa")}" style="height:330px"></div>
      <p class="foot-note" id="${id("mapa-nota")}"></p>
    </div>`;

  const MAXSEL=8, NDEF=6, COLS=SM.catLines.slice(0,MAXSEL);
  const MES3=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
  const xl=f=>`${MES3[+f.slice(5)-1]} ${f.slice(2,4)}`;
  const nf=(v,d=1)=>v==null?"–":v.toLocaleString("es-ES",{minimumFractionDigits:d,maximumFractionDigits:d});
  const corta=c=>P.corta[c]||c;
  const esRes=c=>P.residuales.includes(c)||c.startsWith("Código sin etiqueta");
  const AV=P.disponibles; // índices de oleada con la pregunta, por bloque
  const st={bloque:B[0],medida:"total",sel:{},col:{},perfil:PF.vars[0].id};
  st.i=AV[st.bloque][AV[st.bloque].length-1];
  const S=()=>P.bloques[st.bloque][st.medida];
  const prevIdx=i=>{const a=AV[st.bloque],k=a.indexOf(i);return k>0?a[k-1]:null;};
  const esMovil=()=>window.innerWidth<640;
  const MED={total:"% que lo cita entre sus tres respuestas",primero:"% que lo cita en primer lugar"};
  const etqEstudio=i=>P.estudios?`${labL(P.fechas[i])} · ${P.estudios[i]}`:labL(P.fechas[i]);
  const tt={backgroundColor:"#fff",borderColor:SM.c.grid,borderWidth:1,textStyle:{color:SM.c.tinta,fontFamily:SM.sans,fontSize:12},extraCssText:"box-shadow:0 2px 8px rgba(0,0,0,.12);border-radius:3px"};

  function ranking(i){const s=S(),a=prevIdx(i);
    return Object.keys(s).filter(c=>!esRes(c)&&s[c][i]!=null&&s[c][i]>0)
      .map(c=>({c,v:s[c][i],ant:a==null?null:s[c][a]})).sort((x,y)=>y.v-x.v);}
  const ultimo=b=>AV[b][AV[b].length-1];
  function porDefecto(b){const s=P.bloques[b].total,u=ultimo(b);
    return Object.keys(s).filter(c=>!esRes(c)).sort((a,c)=>(s[c][u]??-1)-(s[a][u]??-1)).slice(0,NDEF);}
  function asigna(b){const col=st.col[b]||(st.col[b]={}); Object.keys(col).forEach(c=>{if(!st.sel[b].includes(c))delete col[c]});
    const usados=new Set(Object.values(col));
    st.sel[b].forEach(c=>{if(col[c]==null){const i=COLS.findIndex((_,k)=>!usados.has(k));col[c]=i;usados.add(i);}});}
  B.forEach(b=>{st.sel[b]=porDefecto(b);asigna(b);});
  const chB=mkChart(id("ch-top10")), chE=mkChart(id("ch-evo")), chM=mkChart(id("ch-mapa"));

  function llenaSelector(){const sel=$("estudio");
    sel.innerHTML=AV[st.bloque].map(i=>`<option value="${i}">${etqEstudio(i)}</option>`).reverse().join(""); sel.value=String(st.i);}
  function segs(k){document.querySelectorAll(`#${id(k)} button`).forEach(b=>b.addEventListener("click",()=>{
    st[k]=b.dataset.v;document.querySelectorAll(`#${id(k)} button`).forEach(x=>x.setAttribute("aria-pressed",x===b));
    if(k==="bloque"&&!AV[st.bloque].includes(st.i))st.i=ultimo(st.bloque);
    if(k==="bloque")llenaSelector(); pinta();}));}
  segs("bloque"); segs("medida"); llenaSelector();
  $("estudio").addEventListener("change",e=>{st.i=+e.target.value;pinta();});
  $("perfil").innerHTML=PF.vars.map(v=>`<option value="${v.id}">${v.nombre}</option>`).join("");
  $("perfil").addEventListener("change",e=>{st.perfil=e.target.value;pintaMapa();});
  const color=()=>st.bloque===B[0]?SM.c.teal:SM.c.naranja;

  function pintaBarras(){
    const i=st.i, a=prevIdx(i), r=ranking(i).slice(0,10), mov=esMovil();
    $("top10-subt").textContent=`${cfg.TXT[st.bloque]} · ${MED[st.medida]} · ${labL(P.fechas[i])}`;
    $("top10-export").dataset.name=`${pre}_top10_${st.bloque}_${st.medida}_${P.fechas[i]}`;
    const o=smBaseOption();
    o.grid={left:8,right:mov?12:24,top:6,bottom:28,containLabel:true};
    o.tooltip={...tt,trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(1,69,80,.06)"}},
      formatter:ps=>{const d=r[ps[0].dataIndex];const dif=d.ant==null?null:d.v-d.ant;
        return `<div style="font-weight:600;margin-bottom:4px;max-width:280px;white-space:normal">${d.c}</div>${labL(P.fechas[i])}: <b>${nf(d.v)} %</b>`+
          (a!=null?`<br>${labL(P.fechas[a])}: ${d.ant==null?"no se preguntaba":nf(d.ant)+" %"}`:"")+(dif!=null?`<br>Variación: <b>${dif>0?"+":""}${nf(dif)} pp</b>`:"");}};
    o.xAxis={type:"value",min:0,splitNumber:mov?3:5,axisLabel:{color:SM.c.subtle,fontSize:11,formatter:v=>v+" %"},splitLine:{lineStyle:{color:"#EEEBE3"}}};
    const nw=mov?96:200, trunc=(t,n)=>t.length>n?t.slice(0,n-1)+"…":t;
    o.yAxis={type:"category",inverse:true,data:r.map((d,k)=>k),axisTick:{show:false},axisLine:{lineStyle:{color:SM.c.grid}},
      axisLabel:{formatter:k=>`{n|${trunc(corta(r[k].c),mov?14:32)}}{v|${nf(r[k].v)}}`,
        rich:{n:{width:nw,align:"right",color:SM.c.tinta,fontSize:12,fontFamily:SM.sans},v:{width:mov?34:40,align:"right",color:SM.c.tinta,fontSize:12.5,fontWeight:600,fontFamily:SM.sans}}}};
    o.series=[{type:"bar",data:r.map(d=>d.v),barWidth:"58%",itemStyle:{color:color(),borderRadius:[0,4,4,0]},label:{show:false}}];
    chB.setOption(o,true);
  }
  function pintaTop3(){
    const i=st.i, a=prevIdx(i), r=ranking(i).slice(0,3), borde=st.bloque===B[0]?"var(--sm-teal)":"var(--sm-naranja)";
    const ra=a==null?[]:ranking(a).map(d=>d.c);
    $("top3-subt").textContent=labL(P.fechas[i])+(a!=null?` frente a ${labL(P.fechas[a])}`:"");
    $("top3").innerHTML=r.map((d,k)=>{
      const dif=d.ant==null?null:d.v-d.ant, pa=ra.indexOf(d.c)+1;
      const cls=dif==null||Math.abs(dif)<0.05?"eq":dif>0?"up":"down";
      const flecha=cls==="up"?"▲":cls==="down"?"▼":"=";
      const dtxt=a==null?cfg.g.primero:dif==null?"Opción nueva":`${flecha} ${dif>0?"+":""}${nf(dif)} pp`;
      const ptxt=a==null||dif==null?"":pa?(pa===k+1?"mismo puesto":`antes ${pa}.º`):"antes fuera del ranking";
      return `<div class="kpi" style="border-top-color:${borde}"><div class="kpi-top"><span class="kpi-n">${k+1}.º</span><span class="kpi-name" title="${d.c}">${corta(d.c)}</span></div>
        <div class="kpi-row"><span class="kpi-v">${nf(d.v)}<small> %</small></span><span class="kpi-d ${cls}">${dtxt}</span></div><div class="kpi-p">${ptxt}</div></div>`;}).join("");
  }
  function chips(){
    const b=st.bloque, sel=st.sel[b], col=st.col[b], el=$("chips"), s=S();
    const resto=Object.keys(s).filter(c=>!sel.includes(c)&&!c.startsWith("Código sin etiqueta")).sort((a,c)=>{
      const ra=esRes(a), rc=esRes(c); if(ra!==rc)return ra?1:-1; return (s[c][st.i]??-1)-(s[a][st.i]??-1);});
    el.innerHTML=sel.map(c=>`<span class="chip" title="${c}"><span class="sw" style="background:${COLS[col[c]]}"></span><span class="nm">${corta(c)}</span><button type="button" data-q="${encodeURIComponent(c)}" aria-label="Quitar ${corta(c)}">×</button></span>`).join("")
      +(sel.length<MAXSEL?`<select class="add-sel" aria-label="Añadir problema"><option value="">+ Añadir problema…</option>${resto.map(c=>`<option value="${encodeURIComponent(c)}">${corta(c)} (${nf(s[c][st.i])} %)</option>`).join("")}</select>`:`<span class="foot-note" style="margin:0">Máximo ${MAXSEL} problemas</span>`)
      +`<button type="button" class="link-btn">Restablecer</button>`;
    el.querySelectorAll(".chip button").forEach(x=>x.addEventListener("click",()=>{st.sel[b]=sel.filter(c=>c!==decodeURIComponent(x.dataset.q));asigna(b);pintaEvol();}));
    const add=el.querySelector("select"); if(add)add.addEventListener("change",()=>{if(add.value){st.sel[b].push(decodeURIComponent(add.value));asigna(b);pintaEvol();}});
    el.querySelector(".link-btn").addEventListener("click",()=>{st.sel[b]=porDefecto(b);st.col[b]={};asigna(b);pintaEvol();});
  }
  function pintaEvol(){
    const b=st.bloque, sel=st.sel[b], col=st.col[b], mov=esMovil(), ix=AV[b], pocos=ix.length<=8;
    $("evo-subt").textContent=`${cfg.TXT[b]} · ${MED[st.medida]} · ${labL(P.fechas[ix[0]])} – ${labL(P.fechas[ix[ix.length-1]])}`;
    $("evo-export").dataset.name=`${pre}_problemas_${b}_${st.medida}`;
    chips();
    const o=smBaseOption();
    o.grid={left:8,right:mov?16:190,top:16,bottom:34,containLabel:true};
    o.tooltip={...tt,trigger:"axis",axisPointer:{type:"line",lineStyle:{color:SM.c.subtle,width:1}},
      formatter:ps=>{const i=ix[ps[0].dataIndex];const rows=ps.filter(p=>p.value!=null).sort((a,c)=>c.value-a.value)
        .map(p=>`<div style="display:flex;gap:8px;align-items:center;justify-content:space-between"><span><span style="display:inline-block;width:10px;height:3px;border-radius:2px;background:${p.color};margin-right:6px;vertical-align:middle"></span>${p.seriesName}</span><b>${nf(p.value)} %</b></div>`).join("");
        return `<div style="font-weight:600;margin-bottom:4px">${etqEstudio(i)} · N=${P.base_n[i].toLocaleString("es-ES")}</div>${rows}`;}};
    o.xAxis={type:"category",data:ix.map(i=>xl(P.fechas[i])),boundaryGap:pocos,axisLine:{lineStyle:{color:SM.c.grid}},axisTick:{show:false},
      axisLabel:{color:SM.c.subtle,fontSize:11,interval:pocos?0:(mov?5:(ix.length>20?2:0)),hideOverlap:true}};
    o.yAxis={type:"value",min:0,axisLabel:{color:SM.c.subtle,fontSize:11,formatter:v=>v+" %"},splitLine:{lineStyle:{color:"#EEEBE3"}}};
    const k0=ix.indexOf(st.i);
    o.series=sel.map((c,k)=>({name:corta(c),type:"line",data:ix.map(i=>S()[c][i]),connectNulls:false,showSymbol:pocos,symbolSize:pocos?7:8,
      lineStyle:{width:2,color:COLS[col[c]]},itemStyle:{color:COLS[col[c]]},emphasis:{focus:"series",lineStyle:{width:3}},
      endLabel:{show:!mov,formatter:p=>`${corta(c).length>24?corta(c).slice(0,23)+"…":corta(c)}  ${nf(p.value)}`,color:SM.c.tinta,fontSize:11.5,distance:6},
      labelLayout:{moveOverlap:"shiftY"},
      markLine:k===0&&k0!==ix.length-1?{silent:true,symbol:"none",label:{show:false},lineStyle:{color:SM.c.subtle,type:"dashed",width:1},data:[{xAxis:k0}]}:undefined}));
    chE.setOption(o,true);
    $("evo-nota").textContent=cfg.notaEvol(st)+(k0!==ix.length-1?` Línea discontinua: ${cfg.g.sel}.`:"")+(sel.some(esRes)?" "+cfg.notaResidual:"");
    const idx=[...ix].reverse();
    $("tabla").innerHTML=`<table><thead><tr><th>Problema (%)</th>${idx.map(i=>`<th>${xl(P.fechas[i])}</th>`).join("")}</tr></thead><tbody>${
      sel.map(c=>`<tr><td title="${c}">${corta(c)}</td>${idx.map(i=>{const v=S()[c][i];return `<td class="${v==null?"na":""}">${nf(v)}</td>`}).join("")}</tr>`).join("")}</tbody></table>`;
  }
  function pintaMapa(){
    if(!chM)return;
    const i=st.i, v=PF.vars.find(x=>x.id===st.perfil), mov=esMovil();
    const tops=ranking(i).slice(0,5).map(d=>d.c), D=(PF.datos[st.bloque]?.[st.medida]?.[i])||{}, N=PF.n[i][v.id];
    const G=v.grupos.slice(1), NG=N.slice(1), sinDato=NG.every(n=>n==null);
    const elec=v.id==="voto"&&PF.eleccion&&PF.eleccion[i]?PF.eleccion[i]:null;
    $("mapa-subt").textContent=`${cfg.TXT[st.bloque]} · ${MED[st.medida]} en cada grupo · ${labL(P.fechas[i])}`+(elec?` · voto en ${elec}`:"");
    $("mapa-export").dataset.name=`${pre}_perfiles_${v.id}_${st.bloque}_${st.medida}_${P.fechas[i]}`;
    const peq=NG.map(n=>n!=null&&n<100);
    const data=[]; let mx=0, mn=Infinity;
    tops.forEach((c,y)=>G.forEach((g,x)=>{const val=D[c]?.[v.id]?.[x+1]; if(val!=null){mx=Math.max(mx,val);mn=Math.min(mn,val);} data.push([x,y,val??"-"]);}));
    if(!isFinite(mn))mn=0; if(mx-mn<1)mx=mn+1;
    const o=smBaseOption();
    o.grid={left:4,right:mov?4:12,top:mov?44:40,bottom:26,containLabel:true};
    o.tooltip={...tt,formatter:p=>{const [x,y,val]=p.value;return `<div style="font-weight:600;max-width:280px;white-space:normal">${tops[y]}</div>${v.nombre}: <b>${G[x]}</b>${peq[x]?" (menos de 100 entrevistas)":""}<br>${val==="-"?"Sin dato":`<b>${nf(val)} %</b>`}`;}};
    o.xAxis={type:"category",position:"top",data:G.map((g,k)=>peq[k]?g+"*":g),axisTick:{show:false},axisLine:{show:false},
      axisLabel:{color:SM.c.tinta,fontSize:mov?9.5:11.5,interval:0,lineHeight:mov?11:14,width:mov?Math.max(28,(window.innerWidth-150)/G.length):undefined,overflow:mov?"break":"none"}};
    o.yAxis={type:"category",inverse:true,data:tops.map(c=>corta(c)),axisTick:{show:false},axisLine:{show:false},
      axisLabel:{color:SM.c.tinta,fontSize:12,width:mov?92:220,overflow:"truncate"}};
    // Escala divergente S&M: verde intenso (teal) = más bajo → crema → naranja = más alto
    o.visualMap={show:false,min:mn,max:mx,dimension:2,inRange:{color:["#014550","#6FA9AC","#F3EFE4","#FBB089","#FF723C"]}};
    o.series=[{type:"heatmap",itemStyle:{borderColor:"#fff",borderWidth:2,borderRadius:3},
      label:{show:true,fontSize:mov?10.5:12.5,fontFamily:SM.sans,fontWeight:500,formatter:p=>p.value[2]==="-"?"–":nf(p.value[2])},
      emphasis:{itemStyle:{borderColor:SM.c.tinta,borderWidth:1}},
      data:data.map(d=>({value:d,label:{color:d[2]!=="-"&&(d[2]-mn)/(mx-mn)<=0.22?"#fff":SM.c.tinta}}))}];
    chM.setOption(o,true);
    $("mapa-nota").textContent=(sinDato?cfg.sinDatoPerfil(v.id,i)+" ":"")+
      `% de cada grupo que cita el problema (lectura por columnas), ${cfg.ponderacion}. Los 5 problemas son los principales del total en ${cfg.g.ese}. Naranja = % más alto; verde = % más bajo (escala de cada mapa, del mínimo al máximo).`+
      (peq.some(Boolean)?" * Grupo con menos de 100 entrevistas: tómese con cautela.":"")+(cfg.notaPerfil[v.id]?" "+cfg.notaPerfil[v.id]:"");
  }
  function pinta(){if(chB)pintaBarras();pintaTop3();if(chE)pintaEvol();pintaMapa();}
  let rz; window.addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(pinta,200);});
  pinta();
}
montarProblemas({pre:"cp",grid:"grid-cis-problemas",P:DATA.cis_problemas,PF:DATA.cis_perfiles,unidad:"Barómetro",
  g:{elegido:"del barómetro elegido",primero:"Primer barómetro de la serie",sel:"barómetro seleccionado arriba",ese:"ese barómetro"},
  bloques:[["espana","Problemas de España"],["personal","Le afectan personalmente"]],
  TXT:{espana:"Principal problema de España",personal:"Problema que más le afecta personalmente"},
  residualesTxt:"«Otras respuestas», «Ninguno», «N.S.» ni «N.C.»",
  notaTop3:"Variación en puntos porcentuales (pp) respecto al barómetro anterior. El CIS no hace barómetro en agosto: tras julio se compara con septiembre.",
  notaEvol:st=>"Fuente: Barómetros del CIS (microdatos), ponderados con PESO. Base: total de personas entrevistadas. "+
    (st.medida==="total"?"El total suma el primer, segundo y tercer problema; «Ninguno», «N.S.» y «N.C.» cuentan solo en primer lugar. ":"")+
    "Hueco en la línea: la opción no existía en el cuestionario ese mes. El CIS no hace barómetro en agosto.",
  notaResidual:"«Otras respuestas» es menor que en el avance del CIS porque aquí las categorías pequeñas se mantienen separadas.",
  ponderacion:"ponderado con PESO",
  sinDatoPerfil:(v,i)=>v==="voto"?"Sin cruce por recuerdo de voto este mes: el barómetro de septiembre de 2023 pregunta por las generales de 2019.":"Sin dato para este cruce.",
  notaPerfil:{voto:"«Otros partidos»: ERC, Junts, EH Bildu, EAJ-PNV, BNG, CCa, UPN, PACMA y otros. Sin voto en blanco, nulo, N.R. ni N.C.",clase:"Clase social subjetiva; sin «Otras», N.S. ni N.C."}});
montarProblemas({pre:"sp",grid:"grid-soc-problemas",P:DATA.soc_problemas,PF:DATA.soc_perfiles,unidad:"Oleada",
  g:{elegido:"de la oleada elegida",primero:"Primera oleada con esta pregunta",sel:"oleada seleccionada arriba",ese:"esa oleada"},
  bloques:[["euskadi","Problemas de Euskadi"],["personal","Le afectan personalmente"]],
  TXT:{euskadi:"Problemas más importantes de Euskadi",personal:"Problemas que más le afectan personalmente"},
  residualesTxt:"«Otros problemas», «Ninguno» ni «NS/NC»",
  notaTop3:"Variación en puntos porcentuales (pp) respecto a la oleada anterior en que se hizo la misma pregunta. Las oleadas no son mensuales ni regulares.",
  notaEvol:st=>"Fuente: Sociómetro Vasco, Gobierno Vasco (microdatos), ponderados con wt. Base: total de personas entrevistadas. "+
    (st.medida==="total"?"El total suma los tres problemas citados; «Ninguno» y «NS/NC» cuentan solo en primer lugar. ":"")+
    (st.bloque==="euskadi"?"La pregunta sobre Euskadi no se hizo en marzo de 2024. ":"La pregunta personal solo se hizo en junio y diciembre de 2025 y en abril y junio de 2026. ")+
    "Las oleadas no están equiespaciadas. Hueco en la línea: la opción no existía en el cuestionario esa oleada.",
  notaResidual:"«Otros problemas» agrupa las respuestas que el Sociómetro no codifica aparte.",
  ponderacion:"ponderado con wt",
  sinDatoPerfil:(v,i)=>v==="clase"?"Sin cruce por clase social en esta oleada: no se preguntó.":"Sin dato para este cruce en esta oleada.",
  notaPerfil:{voto:"Recuerdo de la elección que pregunta cada oleada (autonómicas 2020 o 2024, o Juntas Generales 2019 o 2023): ver subtítulo. PP incluye PP+Ciudadanos (2020). «Otros partidos»: Elkarrekin Podemos, Sumar, Vox y otras candidaturas. Sin blanco, nulo, sin derecho a voto, NS ni NC.",
    clase:"Clase social subjetiva en tres categorías (así la pregunta el Sociómetro); sin NS/NC."}});

/* ===================== CIS · Radares por grupo de población (bloque cis_radar, R/radar_cis.R) ===================== */
/* Dos radares con la misma mecánica: cada polígono es un grupo de población y el total de la población va
   siempre como referencia discontinua.
   1) Problemas: vértices = los 5 problemas más citados por el total + los 5 primeros de cada grupo marcado (máx. 8).
   2) Intención directa de voto: vértices = los seis partidos estatales, de izquierda a derecha. */
(function(){
  const R=DATA.cis_radar, grid=document.getElementById("grid-cis-voto"); if(!R||!grid)return;
  const GCOL=[SM.c.teal,SM.c.naranja,SM.c.purpura,SM.c.amarillo];   // series en el orden de la paleta S&M
  const nf=v=>v==null?"–":v.toLocaleString("es-ES",{minimumFractionDigits:1,maximumFractionDigits:1});
  const MES3=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
  const xl=f=>`${MES3[+f.slice(5)-1]} ${f.slice(0,4)}`;
  const DIMS=R.dims.filter(d=>d.id!=="total");
  const CORTA=DATA.cis_problemas?.corta||{};
  const corto=n=>CORTA[n]||n.replace(/^(La|El|Los|Las) /,"").replace(/^./,c=>c.toUpperCase());
  const DEF={edad:["18-24","65 y más"],ideologia:["Izquierda (1-2)","Centro (5-6)","Derecha (9-10)"],recuerdo:["PSOE","PP","VOX"],
    sexo:["Hombre","Mujer"],estudios:["Sin estudios o primaria","Superiores"],clase:["Alta y media alta","Trabajadora/obrera"],
    habitat:["Hasta 10.000 hab.","Más de 400.000"],laboral:["Trabaja","Jubilado/a o pensionista","Estudiante"]};
  const PART_ORD=["PSOE","Sumar","Podemos","Se Acabó la Fiesta","VOX","PP"];
  const CFG=[
    {id:"rp",clave:"problemas",dim0:"edad",titulo:"¿Qué le preocupa a cada grupo?",
     subt:"Principales problemas de España · cada grupo frente al total de la población",
     cosa:"ese problema", verbo:"lo menciona",
     // vértices: 5 primeros del total + 5 primeros de cada grupo marcado, sin repetir, hasta 8
     ejes:(ol,dim,sel)=>{const nom=R.problemas_nombres[ol], tot=R.problemas.total.Total[ol];
       const ix=new Set([0,1,2,3,4].filter(i=>i<nom.length));
       sel.forEach(g=>{const v=R.problemas[dim]?.[g]?.[ol]; if(!v)return;
         v.map((x,i)=>[x??-1,i]).sort((p,q)=>q[0]-p[0]).slice(0,5).forEach(([,i])=>{if(ix.size<8)ix.add(i);});});
       return [...ix].sort((p,q)=>(tot[q]??0)-(tot[p]??0)).map(i=>({n:nom[i],i}));},
     corto:corto,
     nota:"Fuente: Barómetros del CIS (microdatos), principales problemas de España (PESPANNA1-3, hasta tres respuestas, total de menciones), ponderado con PESO. Base: total de personas entrevistadas de cada grupo. Vértices: los cinco problemas más citados por el total de la población y, si un grupo marcado tiene otro entre sus cinco primeros, también ese (hasta ocho)."},
    {id:"ri",clave:"intencion",dim0:"ideologia",titulo:"¿A qué partido votaría cada grupo?",
     subt:"Intención directa de voto en unas elecciones generales · cada grupo frente al total de la población",
     cosa:"ese partido", verbo:"lo votaría",
     ejes:()=>PART_ORD.map(n=>({n,i:R.ejes_partidos.indexOf(n)})).filter(e=>e.i>=0),
     corto:n=>n==="Se Acabó la Fiesta"?"SALF":n,
     nota:"Fuente: Barómetros del CIS (microdatos), intención directa de voto recodificada por el CIS (INTENCIONGR), ponderada con PESO, sin estimación («cocina»). Base: total de personas entrevistadas de cada grupo (incluye no votaría, no sabe, en blanco y otros partidos, que no se dibujan). Podemos y SALF no aparecen por separado hasta 2024."}
  ];
  CFG.forEach(C=>{
    const id=k=>`${C.id}-${k}`;
    const card=document.createElement("div"); card.className="card span6";
    card.innerHTML=`
      <div class="card-head"><div><h3>${C.titulo}</h3><p class="subt">${C.subt}</p></div>
        <button class="export-btn" data-chart="${id("ch")}" data-name="cis_radar_${C.clave}">⬇ PNG</button></div>
      <div class="ctrls">
        <label class="sel-lab">Grupos por <select id="${id("dim")}" class="sel">${DIMS.map(d=>`<option value="${d.id}"${d.id===C.dim0?" selected":""}>${d.nombre}</option>`).join("")}</select></label>
        <label class="sel-lab">Barómetro <select id="${id("ol")}" class="sel">${R.fechas.map((f,i)=>`<option value="${i}"${i===R.fechas.length-1?" selected":""}>${xl(f)}</option>`).join("")}</select></label>
      </div>
      <div class="ctrls"><div class="seg" id="${id("med")}" role="group" aria-label="Medida"><button type="button" data-v="idx" aria-pressed="true">Índice (total = 100)</button><button type="button" data-v="pct" aria-pressed="false">% del grupo</button></div></div>
      <div class="chips" id="${id("chips")}"></div>
      <div class="explica" id="${id("exp")}"></div>
      <div class="chart" id="${id("ch")}" style="height:430px"></div>
      <p class="foot-note" id="${id("nota")}"></p>
      <details class="tabla"><summary>Ver los datos en tabla</summary><div class="tabla-wrap" id="${id("tabla")}"></div></details>`;
    grid.appendChild(card);
    const ch=mkChart(id("ch")); if(!ch)return;
    let dim=C.dim0, sel=[...(DEF[dim]||[])], ol=R.fechas.length-1, med="idx";
    document.querySelectorAll(`#${id("med")} button`).forEach(b=>b.addEventListener("click",()=>{med=b.dataset.v;
      document.querySelectorAll(`#${id("med")} button`).forEach(x=>x.setAttribute("aria-pressed",x===b)); pinta();}));
    const grupos=()=>DIMS.find(d=>d.id===dim).grupos;
    const nG=(d,g)=>R.n[d]?.[g]?.[ol];
    function chips(){
      const el=document.getElementById(id("chips"));
      el.innerHTML=grupos().map(g=>{const k=sel.indexOf(g), on=k>=0;
        return `<button type="button" class="chip chip-tg${on?" on":""}" data-g="${encodeURIComponent(g)}" aria-pressed="${on}" ${!on&&sel.length>=4?"disabled":""}>
          <span class="sw" style="background:${on?GCOL[k]:SM.c.grid}"></span><span class="nm">${g}</span></button>`;}).join("");
      el.querySelectorAll(".chip-tg").forEach(b=>b.addEventListener("click",()=>{const g=decodeURIComponent(b.dataset.g);
        sel=sel.includes(g)?sel.filter(x=>x!==g):[...sel,g]; pinta();}));
    }
    document.getElementById(id("dim")).addEventListener("change",e=>{dim=e.target.value; sel=[...(DEF[dim]||grupos().slice(0,2))]; pinta();});
    document.getElementById(id("ol")).addEventListener("change",e=>{ol=+e.target.value; pinta();});
    function pinta(){
      chips();
      const mov=window.innerWidth<640;
      const hh=mov?360:440; if(ch.getHeight()&&ch.getHeight()!==hh){document.getElementById(id("ch")).style.height=hh+"px";ch.resize();}
      const EJ=C.ejes(ol,dim,sel);
      const vals=(d,g)=>{const v=R[C.clave][d]?.[g]?.[ol]; return EJ.map(e=>v?v[e.i]??null:null);};
      const tot=vals("total","Total");
      const series=sel.map((g,k)=>({g,k,v:vals(dim,g)}));
      // índice: % del grupo / % del total × 100 (100 = igual que el conjunto de la población)
      const idx=v=>v.map((x,i)=>x==null||!tot[i]?null:Math.round(1000*x/tot[i])/10);
      const dib=v=>med==="idx"?idx(v):v;
      const totD=med==="idx"?tot.map(x=>x?100:null):tot;
      const mx=Math.max(...totD.filter(v=>v!=null),...series.flatMap(s=>dib(s.v).filter(v=>v!=null)),1);
      const max=med==="idx"?Math.min(Math.max(200,Math.ceil(mx/50)*50),400):(mx<=20?Math.ceil(mx/5)*5:Math.ceil(mx/10)*10);
      const paso=med==="idx"?50:(max<=20?5:10);
      const o=smBaseOption();
      o.radar={center:["50%","52%"],radius:mov?"58%":"64%",splitNumber:Math.round(max/paso),shape:"polygon",
        indicator:EJ.map(e=>({name:e.n,max})),
        axisName:{color:SM.c.tinta,fontSize:mov?10.5:12,fontWeight:500,fontFamily:SM.sans,
          formatter:n=>{const t=C.corto(n);return t.length>18?t.replace(/(.{1,18})(\s|$)/g,"$1\n").trim():t;}},
        nameGap:8,
        splitLine:{lineStyle:{color:SM.c.grid}},splitArea:{areaStyle:{color:["#FFFFFF",SM.c.crema+"80"]}},axisLine:{lineStyle:{color:SM.c.grid}},
        axisLabel:{show:false}};
      o.tooltip={backgroundColor:"#fff",borderColor:SM.c.grid,borderWidth:1,confine:true,textStyle:{color:SM.c.tinta,fontFamily:SM.sans,fontSize:12},
        extraCssText:"border-radius:0",
        formatter:p=>{const v=p.data.raw, ix=idx(v), ord=EJ.map((e,i)=>({e:C.corto(e.n),v:v[i],x:ix[i]})).filter(r=>r.v!=null).sort((a,b)=>b.v-a.v);
          return `<div style="font-weight:600;margin-bottom:4px">${p.name}</div>`+ord.map(r=>`<div style="display:flex;gap:14px;justify-content:space-between"><span>${r.e}</span><span><b>${nf(r.v)} %</b>${med==="idx"&&r.x!=null&&p.name!=="Total de la población"?` <span style="color:${SM.c.subtle}">· índice ${Math.round(r.x)}</span>`:""}</span></div>`).join("");}};
      o.series=[{type:"radar",symbol:"circle",symbolSize:mov?4:5,data:[
        {name:"Total de la población",value:totD.map(v=>v==null?0:Math.min(v,max)),raw:tot,lineStyle:{color:SM.c.tinta,width:1.2,type:[4,4]},itemStyle:{color:SM.c.tinta},symbolSize:0,areaStyle:{opacity:0},z:1},
        ...series.map(s=>({name:s.g,value:dib(s.v).map(v=>v==null?0:Math.min(v,max)),raw:s.v,lineStyle:{color:GCOL[s.k],width:2.5},itemStyle:{color:GCOL[s.k]},areaStyle:{color:GCOL[s.k],opacity:.12}}))
      ],emphasis:{lineStyle:{width:3.5},areaStyle:{opacity:.28}}}];
      o.graphic=[smLogoGraphic(),{type:"text",left:4,bottom:6,silent:true,style:{text:med==="idx"?`Cada anillo: ${paso} · borde: ${max} (los valores mayores se recortan)`:`Cada anillo: ${paso} puntos · borde: ${max} %`,fill:SM.c.subtle,fontSize:10.5,fontFamily:SM.sans}}];
      ch.setOption(o,true);
      // explicación del índice con un ejemplo real
      const ex=document.getElementById(id("exp"));
      if(med==="idx"){
        let best=null; series.forEach(s=>idx(s.v).forEach((x,i)=>{if(x!=null&&tot[i]>=2&&(!best||x>best.x))best={g:s.g,e:C.corto(EJ[i].n),x,v:s.v[i],t:tot[i]};}));
        ex.hidden=false;
        ex.innerHTML=`<b>Cómo se lee el índice.</b> Compara cada grupo con el conjunto de la población. <b>100</b> (la línea discontinua) significa que el grupo ${C.verbo} igual que la media; <b>200</b>, el doble; <b>50</b>, la mitad. Cuanto más sale un vértice de la línea discontinua, más destaca ${C.cosa} en ese grupo.`+
          (best?` <span class="ej">Ejemplo: ${best.g} · ${best.e}: ${nf(best.v)} % frente al ${nf(best.t)} % del total → índice ${Math.round(best.x)}.</span>`:"");
      } else ex.hidden=true;
      const ns=sel.map(g=>`${g}: ${(nG(dim,g)||0).toLocaleString("es-ES")}`).join(" · ");
      document.getElementById(id("nota")).textContent=`${C.nota} Barómetro de ${xl(R.fechas[ol])} (estudio ${R.estudios[ol]}). Entrevistas: total ${(nG("total","Total")||0).toLocaleString("es-ES")}${ns?" · "+ns:""}. Índice = % del grupo ÷ % del total × 100.`;
      const filas=[["Total de la población",tot],...series.map(s=>[s.g,s.v])];
      document.getElementById(id("tabla")).innerHTML=`<table><thead><tr><th>%</th>${EJ.map(e=>`<th>${C.corto(e.n)}</th>`).join("")}</tr></thead><tbody>${
        filas.map(([g,v])=>`<tr><td>${g}</td>${v.map(x=>`<td class="${x==null?"na":""}">${nf(x)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
    }
    let rz; window.addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(pinta,200);});
    pinta();
  });
})();

/* ===================== CIS · Probabilidad de ir a votar × recuerdo de voto (mapa de calor) ===================== */
(function(){
  const PV=DATA.cis_probvoto, grid=document.getElementById("grid-cis-voto"); if(!PV||!grid)return;
  const card=document.createElement("div"); card.className="card";
  card.innerHTML=`
      <div class="card-head"><div><h3>Probabilidad de ir a votar según el recuerdo de voto</h3><p class="subt" id="pv-subt"></p></div>
        <button class="export-btn" id="pv-export" data-chart="pv-ch" data-name="cis_probabilidad_voto" hidden>⬇ PNG</button></div>
      <div class="scroll-x"><div class="chart" id="pv-ch" style="height:430px;min-width:680px"></div></div>
      <p class="foot-note" id="pv-nota"></p>`;
  grid.appendChild(card);
  const nf=(v,d=1)=>v==null?"–":v.toLocaleString("es-ES",{minimumFractionDigits:d,maximumFractionDigits:d});
  const i=PV.fechas.length-1; // solo el último barómetro
  const ch=mkChart("pv-ch"), esMovil=()=>window.innerWidth<640;
  const NC=11; // solo 0-10 (sin N.S. ni N.C.)
  const XL=PV.cols.slice(0,NC).map(c=>c==="0"?"0\nSeguro que no":c==="10"?"10\nSeguro que sí":c);
  function pinta(){
    if(!ch)return;
    const D=PV.datos[i], G=PV.grupos.filter(g=>D[g]&&g!=="Total"), mov=esMovil();
    document.getElementById("pv-subt").textContent=`Último barómetro: ${labL(PV.fechas[i])} (estudio ${PV.estudios[i]}) · % de cada grupo en cada punto de la escala 0-10 (lectura por filas) · entre paréntesis, la media`;
    document.getElementById("pv-export").dataset.name=`cis_probabilidad_voto_${PV.fechas[i]}`;
    const peq=G.map(g=>D[g].n<100);
    const data=[]; let mx=0, mn=Infinity;
    // Escala LOGARÍTMICA (decisión de Mikel): el color se asigna con log(1+%) para que la columna 10 (50-90 %) no deje
    // todos los valores pequeños en el mismo verde. El orden de los colores se mantiene; el número de cada celda es el % real.
    G.forEach((g,y)=>D[g].v.slice(0,NC).forEach((v,x)=>{const t=Math.log1p(v);mx=Math.max(mx,t);mn=Math.min(mn,t);data.push([x,y,v,t]);}));
    if(mx-mn<0.01)mx=mn+0.01;
    const o=smBaseOption();
    o.grid={left:4,right:mov?4:12,top:mov?40:44,bottom:26,containLabel:true};
    o.tooltip={backgroundColor:"#fff",borderColor:SM.c.grid,borderWidth:1,textStyle:{color:SM.c.tinta,fontFamily:SM.sans,fontSize:12},extraCssText:"box-shadow:0 2px 8px rgba(0,0,0,.12);border-radius:3px",
      formatter:p=>{const [x,y,v]=p.value, g=G[y];return `<div style="font-weight:600">Recuerdo de voto: ${g}</div>Probabilidad ${PV.cols[x]}: <b>${nf(v)} %</b><br>Media del grupo: ${nf(D[g].media,2)}${peq[y]?"<br>Menos de 100 entrevistas: tómese con cautela":""}`;}};
    o.xAxis={type:"category",position:"top",data:XL,axisTick:{show:false},axisLine:{show:false},
      axisLabel:{color:SM.c.tinta,fontSize:mov?9:11,interval:0,lineHeight:12,formatter:t=>mov?t.split("\n")[0]:t}};
    o.yAxis={type:"category",inverse:true,data:G.map((g,k)=>`${g}${peq[k]?"*":""} (${nf(D[g].media)})`),axisTick:{show:false},axisLine:{show:false},
      axisLabel:{color:SM.c.tinta,fontSize:mov?10.5:12}};
    // Misma escala que el resto de mapas: verde intenso = % más bajo → crema → naranja = % más alto
    o.visualMap={show:false,min:mn,max:mx,dimension:3,inRange:{color:["#014550","#6FA9AC","#F3EFE4","#FBB089","#FF723C"]}};
    o.series=[{type:"heatmap",itemStyle:{borderColor:"#fff",borderWidth:2,borderRadius:3},
      label:{show:true,fontSize:mov?8.5:11.5,fontFamily:SM.sans,fontWeight:500,formatter:p=>nf(p.value[2])},
      emphasis:{itemStyle:{borderColor:SM.c.tinta,borderWidth:1}},
      data:data.map(d=>({value:d,label:{color:(d[3]-mn)/(mx-mn)<=0.2?"#fff":SM.c.tinta}}))}];
    ch.setOption(o,true);
    document.getElementById("pv-nota").textContent="Fuente: Barómetros del CIS (microdatos), ponderados con PESO. Escala de probabilidad de ir a votar en unas elecciones generales: 0 = con toda seguridad no iría a votar, 10 = con toda seguridad iría a votar. "+
      "Recuerdo de voto en las generales de 2023. «Otros partidos»: ERC, Junts, EH Bildu, EAJ-PNV, BNG, CCa, UPN, PACMA y otros. Sin «no tenía derecho a voto», N.R. ni N.C. del recuerdo. "+
      (esMovil()?"En el móvil, desliza el mapa hacia los lados para ver toda la escala. ":"")+"No se muestran N.S. ni N.C. (entre 0 y 1 % en cada grupo), por eso las filas pueden no sumar exactamente 100; la media también los excluye. Naranja = % más alto; verde = % más bajo, en escala logarítmica para distinguir mejor los valores pequeños. "+(peq.some(Boolean)?"* Grupo con menos de 100 entrevistas: tómese con cautela. ":"");
  }
  let rz; window.addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(pinta,200);});
  pinta();
})();

/* ===================== CIS · Transferencia de voto: recuerdo 2023 → voto + simpatía (diagrama aluvial) ===================== */
(function(){
  const T=DATA.cis_transfer, grid=document.getElementById("grid-cis-voto"); if(!T||!grid)return;
  const card=document.createElement("div"); card.className="card";
  card.innerHTML=`
      <div class="card-head"><div><h3>Transferencia de voto</h3><p class="subt" id="tr-subt"></p></div>
        <button class="export-btn" id="tr-export" data-chart="tr-ch" data-name="cis_transferencia" hidden>⬇ PNG</button></div>
      <div class="scroll-x"><div class="chart" id="tr-ch" style="height:560px;min-width:640px"></div></div>
      <p class="foot-note" id="tr-nota"></p>
      <details class="tabla"><summary>Ver la matriz en tabla (% de cada grupo de origen)</summary><div class="tabla-wrap" id="tr-tabla"></div></details>`;
  grid.appendChild(card);
  const COLOR={...PARTY_COLORS,"Se Acabó la Fiesta":"#6D4C41","Otros partidos":"#C9C5B8","En blanco o nulo":"#B8B2A0",
    "No votó":"#1A1A1A","Ninguno / no votaría":"#1A1A1A","No tenía edad":"#95F1D8","N.R. / N.C.":"#A9B4B2","N.S. / N.C.":"#7C8C8A"};
  const nf=(v,d=1)=>v==null?"–":v.toLocaleString("es-ES",{minimumFractionDigits:d,maximumFractionDigits:d});
  const last=T.fechas.length-1, i=last; // solo el último barómetro (decisión de Mikel)
  const UMBRAL=1; // solo se dibujan los flujos de al menos el 1 % del total (decisión de Mikel)
  const ch=mkChart("tr-ch"), esMovil=()=>window.innerWidth<640;
  const ON=o=>`${o} · 2023`, DN=d=>`${d} · hoy`;
  function pinta(){
    if(!ch)return;
    const D=T.datos[i], mov=esMovil();
    document.getElementById("tr-subt").textContent=`Izquierda: recuerdo de voto en las generales de 2023 · derecha: voto + simpatía hoy · último barómetro: ${labL(T.fechas[i])} (estudio ${T.estudios[i]}) · grosor = % del total de entrevistados`;
    document.getElementById("tr-export").dataset.name=`cis_transferencia_${T.fechas[i]}`;
    const totO={}, totD={};
    D.flujos.forEach(([o,d,p])=>{totO[o]=(totO[o]||0)+p; totD[d]=(totD[d]||0)+p;});
    const flujos=D.flujos.filter(f=>f[2]>=UMBRAL);
    const nodes=[...T.origenes.map((o,k)=>totO[k]?{name:ON(o),depth:0,value:totO[k],itemStyle:{color:COLOR[o],borderColor:"#fff"},_t:totO[k],_n:D.n[o]}:null),
                 ...T.destinos.map((d,k)=>totD[k]?{name:DN(d),depth:1,value:totD[k],itemStyle:{color:COLOR[d],borderColor:"#fff"},_t:totD[k]}:null)].filter(Boolean);
    const links=flujos.map(([o,d,p,po])=>({source:ON(T.origenes[o]),target:DN(T.destinos[d]),value:p,_po:po,lineStyle:{color:COLOR[T.origenes[o]],opacity:.35}}));
    const o=smBaseOption();
    o.tooltip={backgroundColor:"#fff",borderColor:SM.c.grid,borderWidth:1,textStyle:{color:SM.c.tinta,fontFamily:SM.sans,fontSize:12},extraCssText:"box-shadow:0 2px 8px rgba(0,0,0,.12);border-radius:3px",
      formatter:p=>{
        if(p.dataType==="edge"){const a=p.data.source.replace(" · 2023",""), b=p.data.target.replace(" · hoy","");
          return `<b>${a}</b> (2023) → <b>${b}</b> (hoy)<br>De cada 100 del grupo «${a}», <b>${nf(p.data._po)}</b> van a «${b}»<br>${nf(p.data.value,2)} % del total de entrevistados`;}
        const nm=p.name.replace(/ · (2023|hoy)$/,""), izq=p.name.endsWith("2023");
        return `<b>${nm}</b> · ${izq?"recuerdo 2023":"voto + simpatía hoy"}<br>${nf(p.data._t)} % del total${izq&&p.data._n?` · n=${p.data._n.toLocaleString("es-ES")}`:""}`;}};
    o.series=[{type:"sankey",left:mov?120:150,right:mov?150:170,top:10,bottom:10,nodeWidth:14,nodeGap:mov?6:9,layoutIterations:0,draggable:false,
      emphasis:{focus:"adjacency"},data:nodes,links,
      label:{color:SM.c.tinta,fontFamily:SM.sans,fontSize:mov?10:12,formatter:p=>`${p.name.replace(/ · (2023|hoy)$/,"")}  ${nf(p.data._t)}`},
      levels:[{depth:0,label:{position:"left"}},{depth:1,label:{position:"right"}}]}];
    ch.setOption(o,true);
    document.getElementById("tr-nota").textContent="Fuente: Barómetros del CIS (microdatos), ponderados con PESO. Recuerdo de voto en las generales de julio de 2023 (RECUERDO) y voto + simpatía (VOTOSIMG, codificación del CIS). "+
      "Cada franja es un grupo de personas; su grosor, el % del total de entrevistados. Al pasar el ratón: de cada 100 del grupo de origen, cuántos van a cada destino. "+
      "Solo se dibujan los flujos de al menos el 1 % del total de entrevistados; el resto está en la tabla. Cada barra y su cifra muestran el total del grupo, incluidos los flujos no dibujados. "+
      "«Otros partidos» a la izquierda: ERC, Junts, EH Bildu, EAJ-PNV, BNG, CCa, UPN, PACMA y otros; a la derecha, todos los demás partidos. Sin «no tenía derecho a voto» (≈1 %); por eso los totales de la derecha pueden diferir en una o dos décimas de «Evolución del voto». "+(mov?"En el móvil, desliza el gráfico hacia los lados. ":"")+
      "";
    // tabla: % de cada origen (columnas) hacia cada destino (filas), como el CIS
    const M={}; D.flujos.forEach(([o,d,p,po])=>{(M[d]=M[d]||{})[o]=po;});
    const OI=T.origenes.map((_,k)=>k).filter(k=>totO[k]);
    document.getElementById("tr-tabla").innerHTML=`<table><thead><tr><th>Hoy ↓ / 2023 →</th>${OI.map(k=>`<th>${T.origenes[k]}</th>`).join("")}</tr></thead><tbody>${
      T.destinos.map((d,dk)=>`<tr><td>${d}</td>${OI.map(k=>{const v=M[dk]?.[k];return `<td class="${v==null?"na":""}">${v==null?"0,0":nf(v)}</td>`}).join("")}</tr>`).join("")}
      <tr><td>n (entrevistas)</td>${OI.map(k=>`<td>${(D.n[T.origenes[k]]||0).toLocaleString("es-ES")}</td>`).join("")}</tr></tbody></table>`;
  }
  let rz; window.addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(pinta,200);});
  pinta();
})();

/* ===================== Sociómetro · Análisis del voto (intención directa) ===================== */
(function(){
  const SV=DATA.soc_voto, grid=document.getElementById("grid-soc-voto"); if(!SV||!grid)return;
  const COLOR={"PNV":PARTY_COLORS["EAJ-PNV"],"EH Bildu":PARTY_COLORS["EH Bildu"],"PSE-EE":PARTY_COLORS["PSE-EE (PSOE)"],"PP":PARTY_COLORS["PP"],
    "Vox":PARTY_COLORS["Vox"],"Sumar":PARTY_COLORS["Sumar"],"Elkarrekin Podemos":PARTY_COLORS["Elkarrekin Podemos"],"Otros partidos":"#C9C5B8",
    "En blanco o nulo":"#B8B2A0","No iría a votar":"#1A1A1A","N.S. / N.C.":"#7C8C8A","No votó":"#1A1A1A","No podía votar":"#95F1D8"};
  const DEF=["PNV","EH Bildu","PSE-EE","PP","Vox","Sumar","Elkarrekin Podemos"];
  const MES3=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
  const xl=f=>`${MES3[+f.slice(5)-1]} ${f.slice(2,4)}`;
  const nf=(v,d=1)=>v==null?"–":v.toLocaleString("es-ES",{minimumFractionDigits:d,maximumFractionDigits:d});
  const tt={backgroundColor:"#fff",borderColor:SM.c.grid,borderWidth:1,textStyle:{color:SM.c.tinta,fontFamily:SM.sans,fontSize:12},extraCssText:"box-shadow:0 2px 8px rgba(0,0,0,.12);border-radius:3px"};
  const esMovil=()=>window.innerWidth<640;
  const NOTA_BASE="Fuente: Sociómetro Vasco, Gobierno Vasco (microdatos), ponderados con wt. Intención directa de voto, sin estimación. % sobre el total de entrevistados. "+
    "«No iría a votar» suma a quienes dicen que no votarían y a quienes, en la pregunta anterior, ya dijeron que seguro o probablemente no irían a votar, que no tienen derecho o no contestaron (a ellos no se les pregunta el partido). ";
  function chipsUI(el,sel,orden,valor,setSel,def){
    const resto=orden.filter(p=>!sel.includes(p));
    el.innerHTML=sel.map(p=>`<span class="chip"><span class="sw" style="background:${COLOR[p]}"></span><span class="nm">${p}</span><button type="button" data-q="${encodeURIComponent(p)}" aria-label="Quitar ${p}">×</button></span>`).join("")
      +(resto.length?`<select class="add-sel" aria-label="Añadir"><option value="">+ Añadir…</option>${resto.map(p=>`<option value="${encodeURIComponent(p)}">${p}${valor?` (${nf(valor(p))} %)`:""}</option>`).join("")}</select>`:"")
      +`<button type="button" class="link-btn">Restablecer</button>`;
    el.querySelectorAll(".chip button").forEach(x=>x.addEventListener("click",()=>setSel(sel.filter(p=>p!==decodeURIComponent(x.dataset.q)))));
    const a=el.querySelector("select"); if(a)a.addEventListener("change",()=>{if(a.value){setSel([...sel,decodeURIComponent(a.value)].sort((x,y)=>orden.indexOf(x)-orden.indexOf(y)));}});
    el.querySelector(".link-btn").addEventListener("click",()=>setSel([...def]));
  }

  /* 1 · Evolución de la intención directa: autonómicas / Juntas Generales */
  (function(){
    const card=document.createElement("div"); card.className="card";
    card.innerHTML=`<div class="card-head"><div><h3>Evolución del voto</h3><p class="subt" id="sv-subt"></p></div>
        <button class="export-btn" id="sv-export" data-chart="sv-ch" data-name="soc_intencion" hidden>⬇ PNG</button></div>
      <div class="ctrls"><div class="seg" id="sv-elec" role="group" aria-label="Elecciones">
        <button type="button" data-v="Autonómicas" aria-pressed="true">Autonómicas</button>
        <button type="button" data-v="Juntas Generales" aria-pressed="false">Juntas Generales</button></div></div>
      <div class="chips" id="sv-chips"></div>
      <div class="chart tall" id="sv-ch"></div>
      <p class="foot-note" id="sv-nota"></p>
      <details class="tabla"><summary>Ver los datos en tabla</summary><div class="tabla-wrap" id="sv-tabla"></div></details>`;
    grid.appendChild(card);
    let el="Autonómicas", sel=[...DEF]; const ch=mkChart("sv-ch");
    document.querySelectorAll("#sv-elec button").forEach(b=>b.addEventListener("click",()=>{el=b.dataset.v;
      document.querySelectorAll("#sv-elec button").forEach(x=>x.setAttribute("aria-pressed",x===b));pinta();}));
    function pinta(){
      if(!ch)return;
      const S=SV.series[el], last=S.fechas.length-1, mov=esMovil();
      document.getElementById("sv-subt").textContent=`Intención directa de voto en unas ${el==="Autonómicas"?"elecciones autonómicas (Parlamento Vasco)":"elecciones a Juntas Generales"} · % sobre el total de entrevistados · ${S.fechas.length} oleadas, ${labL(S.fechas[0])} – ${labL(S.fechas[last])}`;
      document.getElementById("sv-export").dataset.name=`soc_intencion_${el==="Autonómicas"?"autonomicas":"juntas"}`;
      chipsUI(document.getElementById("sv-chips"),sel,SV.orden,p=>S.series[p][last],s=>{sel=s;pinta();},DEF);
      const o=smBaseOption();
      o.grid={left:8,right:mov?16:160,top:16,bottom:34,containLabel:true};
      o.tooltip={...tt,trigger:"axis",axisPointer:{type:"line",lineStyle:{color:SM.c.subtle,width:1}},
        formatter:ps=>{const i=ps[0].dataIndex;const rows=ps.filter(p=>p.value!=null).sort((a,c)=>c.value-a.value)
          .map(p=>`<div style="display:flex;gap:8px;align-items:center;justify-content:space-between"><span><span style="display:inline-block;width:10px;height:3px;border-radius:2px;background:${p.color};margin-right:6px;vertical-align:middle"></span>${p.seriesName}</span><b>${nf(p.value)} %</b></div>`).join("");
          return `<div style="font-weight:600;margin-bottom:4px">${labL(S.fechas[i])} · N=${S.base_n[i].toLocaleString("es-ES")}</div>${rows}`;}};
      o.xAxis={type:"category",data:S.fechas.map(xl),boundaryGap:true,axisLine:{lineStyle:{color:SM.c.grid}},axisTick:{show:false},axisLabel:{color:SM.c.subtle,fontSize:11,interval:0,hideOverlap:true}};
      o.yAxis={type:"value",min:0,axisLabel:{color:SM.c.subtle,fontSize:11,formatter:v=>v+" %"},splitLine:{lineStyle:{color:"#EEEBE3"}}};
      o.series=sel.map(p=>({name:p,type:"line",data:S.series[p],connectNulls:false,showSymbol:true,symbolSize:7,
        lineStyle:{width:2,color:COLOR[p]},itemStyle:{color:COLOR[p]},emphasis:{focus:"series",lineStyle:{width:3}},
        endLabel:{show:!mov,formatter:q=>`${p}  ${nf(q.value)}`,color:SM.c.tinta,fontSize:11.5,distance:6},labelLayout:{moveOverlap:"shiftY"}}));
      ch.setOption(o,true);
      document.getElementById("sv-nota").textContent=NOTA_BASE+"Las oleadas no están equiespaciadas. "+
        (el==="Autonómicas"?"Sumar aparece en el cuestionario desde diciembre de 2023; hasta entonces «PP» es «PP+Ciudadanos» (coalición de 2020). ":"En las oleadas de 2022-2023 el Sociómetro preguntó también por las municipales; aquí solo se usan las Juntas Generales. ")+
        "Coincide con el panel anterior del Sociómetro en todas las oleadas comparables.";
      const idx=S.fechas.map((_,i)=>i).reverse();
      document.getElementById("sv-tabla").innerHTML=`<table><thead><tr><th>Intención directa (%)</th>${idx.map(i=>`<th>${xl(S.fechas[i])}</th>`).join("")}</tr></thead><tbody>${
        sel.map(p=>`<tr><td>${p}</td>${idx.map(i=>{const v=S.series[p][i];return `<td class="${v==null?"na":""}">${nf(v)}</td>`}).join("")}</tr>`).join("")}</tbody></table>`;
    }
    let rz; window.addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(pinta,200);}); pinta();
  })();

  /* 2 · Intención directa por perfil (barras verticales, barra deslizante de oleada) */
  (function(){
    const P=SV.perfiles; const card=document.createElement("div"); card.className="card";
    card.innerHTML=`<div class="card-head"><div><h3>Intención de voto por perfil</h3><p class="subt" id="sb-subt"></p></div>
        <button class="export-btn" id="sb-export" data-chart="sb-ch" data-name="soc_intencion_perfil" hidden>⬇ PNG</button></div>
      <div class="ctrls"><div class="seg" id="sb-elec" role="group" aria-label="Elecciones">
        <button type="button" data-v="Autonómicas" aria-pressed="true">Autonómicas</button>
        <button type="button" data-v="Juntas Generales" aria-pressed="false">Juntas Generales</button></div>
        <label class="sel-lab">Cruzar por <select id="sb-var" class="sel"></select></label></div>
      <div class="chips" id="sb-chips"></div>
      <div class="deslizador"><div class="deslizador-cab"><span>Oleada:</span> <b id="sb-oleada"></b></div>
        <input type="range" id="sb-rango" min="0" step="1" aria-label="Elegir oleada">
        <div class="deslizador-marcas"><span id="sb-ini"></span><span id="sb-fin"></span></div></div>
      <div class="scroll-x"><div class="chart" id="sb-ch" style="height:420px;min-width:620px"></div></div>
      <p class="foot-note" id="sb-nota"></p>
      <details class="tabla"><summary>Ver los datos en tabla</summary><div class="tabla-wrap" id="sb-tabla"></div></details>`;
    grid.appendChild(card);
    // Oleadas de cada elección (índices sobre P.fechas); la barra deslizante recorre solo las de la elección elegida
    const IDX={}; P.eleccion.forEach((e,k)=>(IDX[e]=IDX[e]||[]).push(k));
    let el="Autonómicas", pos=IDX[el].length-1, v=P.vars[0].id, sel=[...DEF];
    const idx=()=>IDX[el][pos];
    const selV=document.getElementById("sb-var"); selV.innerHTML=P.vars.map(x=>`<option value="${x.id}">${x.nombre}</option>`).join("");
    selV.addEventListener("change",()=>{v=selV.value;pinta();});
    const rng=document.getElementById("sb-rango");
    function ponRango(){const n=IDX[el].length-1; rng.max=String(n); pos=n; rng.value=String(n);
      document.getElementById("sb-ini").textContent=labL(P.fechas[IDX[el][0]]); document.getElementById("sb-fin").textContent=labL(P.fechas[IDX[el][n]]);}
    rng.addEventListener("input",()=>{pos=+rng.value;pinta();});
    document.querySelectorAll("#sb-elec button").forEach(b=>b.addEventListener("click",()=>{el=b.dataset.v;
      document.querySelectorAll("#sb-elec button").forEach(x=>x.setAttribute("aria-pressed",x===b));ponRango();pinta();}));
    ponRango();
    const ch=mkChart("sb-ch");
    function pinta(){
      if(!ch)return;
      const i=idx(), esUlt=pos===IDX[el].length-1;
      const V=P.vars.find(x=>x.id===v), G=V.grupos, D=P.datos[v], mov=esMovil();
      const hay=G.some(g=>D[g].n[i]!=null);
      const peq=G.map(g=>D[g].n[i]!=null&&D[g].n[i]<100);
      document.getElementById("sb-oleada").textContent=`${labL(P.fechas[i])} · ${P.eleccion[i]}${esUlt?" (última de esta elección)":""} · ${pos+1} de ${IDX[el].length}`;
      document.getElementById("sb-subt").textContent=`${labL(P.fechas[i])} · intención directa en unas elecciones ${P.eleccion[i]==="Autonómicas"?"autonómicas":"a Juntas Generales"} por ${V.nombre.toLowerCase()} · % sobre el total de cada grupo`;
      document.getElementById("sb-export").dataset.name=`soc_intencion_${v}_${P.fechas[i]}`;
      chipsUI(document.getElementById("sb-chips"),sel,SV.orden,null,s=>{sel=s;pinta();},DEF);
      const o=smBaseOption();
      o.grid={left:8,right:12,top:40,bottom:30,containLabel:true};
      o.legend={top:0,left:0,itemWidth:12,itemHeight:8,icon:"roundRect",textStyle:{color:SM.c.tinta,fontSize:11.5,fontFamily:SM.sans}};
      o.tooltip={...tt,trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(1,69,80,.06)"}},
        formatter:ps=>{const k=ps[0].dataIndex, g=G[k];return `<div style="font-weight:600;margin-bottom:4px">${g} · n=${D[g].n[i]==null?"–":D[g].n[i].toLocaleString("es-ES")}${peq[k]?" (menos de 100: cautela)":""}</div>`+
          ps.map(p=>`<div style="display:flex;gap:8px;justify-content:space-between"><span><span style="display:inline-block;width:10px;height:8px;border-radius:2px;background:${p.color};margin-right:6px"></span>${p.seriesName}</span><b>${nf(p.value)} %</b></div>`).join("");}};
      o.xAxis={type:"category",data:G.map((g,k)=>g+(peq[k]?"*":"")),axisTick:{show:false},axisLine:{lineStyle:{color:SM.c.grid}},
        axisLabel:{color:SM.c.tinta,fontSize:mov?10:11.5,interval:0,width:mov?70:110,overflow:"break",lineHeight:13}};
      o.yAxis={type:"value",min:0,axisLabel:{color:SM.c.subtle,fontSize:11,formatter:x=>x+" %"},splitLine:{lineStyle:{color:"#EEEBE3"}}};
      const muchas=sel.length*G.length>30;
      o.series=sel.map(p=>({name:p,type:"bar",data:G.map(g=>D[g].series[p][i]),barMaxWidth:26,barGap:"12%",barCategoryGap:"28%",
        itemStyle:{color:COLOR[p],borderRadius:[3,3,0,0]},label:{show:!muchas&&!mov,position:"top",fontSize:10,color:SM.c.tinta,formatter:q=>q.value==null?"":nf(q.value,0)}}));
      if(!hay){o.series=[];o.graphic=[...(o.graphic||[]),{type:"text",left:"center",top:"middle",style:{text:"Esta oleada no preguntó la clase social",fill:SM.c.subtle,font:"14px "+SM.sans}}];}
      ch.setOption(o,true);
      document.getElementById("sb-nota").textContent="Elige autonómicas o Juntas Generales y mueve la barra deslizante para recorrer las oleadas de esa elección (11 autonómicas, hasta abril de 2026; 5 de Juntas Generales, hasta junio de 2026). "+NOTA_BASE+
        (mov?"En el móvil, desliza el gráfico hacia los lados. ":"")+(peq.some(Boolean)?"* Grupo con menos de 100 entrevistas: tómese con cautela. ":"")+
        (v==="clase"?"Clase social subjetiva en tres categorías; no se preguntó en diciembre de 2021 ni en diciembre de 2023. ":"")+
        (v==="territorio"?"El Sociómetro sobrerrepresenta Araba en la muestra; el peso lo corrige para el total de Euskadi y cada territorio se calcula con sus propias entrevistas. ":"");
      document.getElementById("sb-tabla").innerHTML=`<table><thead><tr><th>${V.nombre} (%)</th>${G.map(g=>`<th>${g}</th>`).join("")}</tr></thead><tbody>${
        sel.map(p=>`<tr><td>${p}</td>${G.map(g=>{const x=D[g].series[p][i];return `<td class="${x==null?"na":""}">${nf(x)}</td>`}).join("")}</tr>`).join("")}
        <tr><td>n (entrevistas)</td>${G.map(g=>`<td>${D[g].n[i]==null?"–":D[g].n[i].toLocaleString("es-ES")}</td>`).join("")}</tr></tbody></table>`;
    }
    let rz; window.addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(pinta,200);}); pinta();
  })();

  /* 3 · Transferencia del voto en elecciones autonómicas (última oleada que preguntó por las autonómicas) */
  (function(){
    const TT=SV.transfer; const el="Autonómicas"; /* solo autonómicas (decisión de Mikel) */ const card=document.createElement("div"); card.className="card";
    card.innerHTML=`<div class="card-head"><div><h3>Transferencia del voto en elecciones autonómicas</h3><p class="subt" id="st-subt"></p></div>
        <button class="export-btn" id="st-export" data-chart="st-ch" data-name="soc_transferencia" hidden>⬇ PNG</button></div>
      <div class="scroll-x"><div class="chart" id="st-ch" style="height:560px;min-width:640px"></div></div>
      <p class="foot-note" id="st-nota"></p>
      <details class="tabla"><summary>Ver la matriz en tabla (% de cada grupo de origen)</summary><div class="tabla-wrap" id="st-tabla"></div></details>`;
    grid.appendChild(card);
    const UMBRAL=1, ch=mkChart("st-ch"), ON=o=>`${o} · recuerdo`, DN=d=>`${d} · hoy`;
    function pinta(){
      if(!ch)return; const mov=esMovil(), T=TT[el];
      document.getElementById("st-subt").textContent=`Izquierda: recuerdo de voto en las ${T.recuerdo.replace("Autonómicas","autonómicas de").replace("Juntas Generales","Juntas Generales de")} · derecha: intención directa en unas elecciones ${T.eleccion==="Autonómicas"?"autonómicas":"a Juntas Generales"} · ${labL(T.fecha)} (última oleada que preguntó por las autonómicas) · grosor = % del total de entrevistados`;
      document.getElementById("st-export").dataset.name=`soc_transferencia_${el==="Autonómicas"?"autonomicas":"juntas"}_${T.fecha}`;
      const totO={}, totD={}; T.flujos.forEach(([o,d,p])=>{totO[o]=(totO[o]||0)+p; totD[d]=(totD[d]||0)+p;});
      const nodes=[...T.origenes.map((o,k)=>totO[k]?{name:ON(o),depth:0,value:totO[k],itemStyle:{color:COLOR[o],borderColor:"#fff"},_t:totO[k],_n:T.n[o]}:null),
                   ...T.destinos.map((d,k)=>totD[k]?{name:DN(d),depth:1,value:totD[k],itemStyle:{color:COLOR[d],borderColor:"#fff"},_t:totD[k]}:null)].filter(Boolean);
      const links=T.flujos.filter(f=>f[2]>=UMBRAL).map(([o,d,p,po])=>({source:ON(T.origenes[o]),target:DN(T.destinos[d]),value:p,_po:po,lineStyle:{color:COLOR[T.origenes[o]],opacity:.35}}));
      const o=smBaseOption();
      o.tooltip={...tt,formatter:p=>{
        if(p.dataType==="edge"){const a=p.data.source.replace(" · recuerdo",""), b=p.data.target.replace(" · hoy","");
          return `<b>${a}</b> (recuerdo) → <b>${b}</b> (hoy)<br>De cada 100 del grupo «${a}», <b>${nf(p.data._po)}</b> van a «${b}»<br>${nf(p.data.value,2)} % del total de entrevistados`;}
        const nm=p.name.replace(/ · (recuerdo|hoy)$/,""), izq=p.name.endsWith("recuerdo");
        return `<b>${nm}</b> · ${izq?"recuerdo":"intención hoy"}<br>${nf(p.data._t)} % del total${izq&&p.data._n?` · n=${p.data._n.toLocaleString("es-ES")}`:""}`;}};
      o.series=[{type:"sankey",left:mov?120:150,right:mov?150:170,top:10,bottom:10,nodeWidth:14,nodeGap:mov?6:9,layoutIterations:0,draggable:false,
        emphasis:{focus:"adjacency"},data:nodes,links,
        label:{color:SM.c.tinta,fontFamily:SM.sans,fontSize:mov?10:12,formatter:p=>`${p.name.replace(/ · (recuerdo|hoy)$/,"")}  ${nf(p.data._t)}`},
        levels:[{depth:0,label:{position:"left"}},{depth:1,label:{position:"right"}}]}];
      ch.setOption(o,true);
      document.getElementById("st-nota").textContent="Fuente: Sociómetro Vasco, Gobierno Vasco (microdatos), ponderados con wt. Cada franja es un grupo de personas; su grosor, el % del total de entrevistados. Al pasar el ratón: de cada 100 del grupo de origen, cuántos van a cada destino. "+
        "Solo se dibujan los flujos de al menos el 1 % del total; cada barra y su cifra muestran el total del grupo. Se muestra la última oleada que preguntó por las autonómicas; recuerdo e intención se refieren a elecciones autonómicas. "+
        "«Otros partidos» en el recuerdo: Elkarrekin Podemos, Sumar, Vox y otras candidaturas. «No podía votar»: menores de edad o sin derecho a voto en esa elección. "+
        "«No iría a votar» incluye a quienes, en la pregunta anterior, dijeron que no irían a votar o no tienen derecho. "+(mov?"En el móvil, desliza el gráfico hacia los lados.":"");
      const M={}; T.flujos.forEach(([o,d,p,po])=>{(M[d]=M[d]||{})[o]=po;});
      const OI=T.origenes.map((_,k)=>k).filter(k=>totO[k]);
      document.getElementById("st-tabla").innerHTML=`<table><thead><tr><th>Hoy ↓ / recuerdo →</th>${OI.map(k=>`<th>${T.origenes[k]}</th>`).join("")}</tr></thead><tbody>${
        T.destinos.map((d,dk)=>`<tr><td>${d}</td>${OI.map(k=>{const v=M[dk]?.[k];return `<td>${v==null?"0,0":nf(v)}</td>`}).join("")}</tr>`).join("")}
        <tr><td>n (entrevistas)</td>${OI.map(k=>`<td>${(T.n[T.origenes[k]]||0).toLocaleString("es-ES")}</td>`).join("")}</tr></tbody></table>`;
    }
    let rz; window.addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(pinta,200);}); pinta();
  })();
})();

/* ===================== CIS · Líderes ===================== */
(function(){
  const grid=document.getElementById("grid-cis-lideres"); if(!grid)return;
  const MES3=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
  const xl=f=>`${MES3[+f.slice(5)-1]} ${f.slice(2,4)}`;
  const nf=(v,d=1)=>v==null?"–":v.toLocaleString("es-ES",{minimumFractionDigits:d,maximumFractionDigits:d});
  const tt={backgroundColor:"#fff",borderColor:SM.c.grid,borderWidth:1,textStyle:{color:SM.c.tinta,fontFamily:SM.sans,fontSize:12},extraCssText:"box-shadow:0 2px 8px rgba(0,0,0,.12);border-radius:3px"};
  const esMovil=()=>window.innerWidth<640;
  // Color de cada líder: el de su partido; si dos del mismo partido pueden coincidir, un tono distinto
  const COLOR={"Pedro Sánchez":PARTY_COLORS["PSOE"],"Alberto Núñez Feijóo":PARTY_COLORS["PP"],"Santiago Abascal":PARTY_COLORS["VOX"],
    "Yolanda Díaz":PARTY_COLORS["Sumar"],"Gabriel Rufián":PARTY_COLORS["ERC"],"Isabel Díaz Ayuso":"#6FA8DC","Alvise Pérez":PARTY_COLORS["Se Acabó la Fiesta"],
    "Irene Montero":PARTY_COLORS["Podemos"],"Ione Belarra":"#A77BC9","Pablo Iglesias":"#3D1A57","Juan Manuel Moreno Bonilla":"#0B4F8A",
    "Emiliano García-Page":"#9E1B1D","Íñigo Errejón":"#3FAE8E","Alberto Garzón":"#B3541E","Inés Arrimadas":PARTY_COLORS["Ciudadanos"],
    "Otro/a":"#C9C5B8","Ninguno/a de ellos/as":"#1A1A1A","N.S.":"#7C8C8A","N.C.":"#A9B4B2"};
  const corto=o=>({"Alberto Núñez Feijóo":"Feijóo","Pedro Sánchez":"Sánchez","Santiago Abascal":"Abascal","Yolanda Díaz":"Yolanda Díaz","Gabriel Rufián":"Rufián",
    "Isabel Díaz Ayuso":"Ayuso","Alvise Pérez":"Alvise Pérez","Irene Montero":"Montero","Ione Belarra":"Belarra","Pablo Iglesias":"Iglesias",
    "Juan Manuel Moreno Bonilla":"Moreno Bonilla","Emiliano García-Page":"García-Page","Íñigo Errejón":"Errejón","Alberto Garzón":"Garzón","Inés Arrimadas":"Arrimadas",
    "Ninguno/a de ellos/as":"Ninguno/a"}[o]||o);

  /* 1 · Preferencia como presidente/a del Gobierno: evolución */
  (function(){
    const P=DATA.cis_prefpte; if(!P)return;
    const card=document.createElement("div"); card.className="card";
    card.innerHTML=`<div class="card-head"><div><h3>Preferencia como presidente/a del Gobierno</h3><p class="subt" id="pp-subt"></p></div>
        <button class="export-btn" id="pp-export" data-chart="pp-ch" data-name="cis_preferencia_presidente" hidden>⬇ PNG</button></div>
      <div class="ctrls"><div class="seg" id="pp-base" role="group" aria-label="Base">
        <button type="button" data-v="total" aria-pressed="true">Sobre el total</button>
        <button type="button" data-v="menciona" aria-pressed="false">Sobre quienes citan a un líder</button></div></div>
      <div class="chips" id="pp-chips"></div>
      <div class="chart tall" id="pp-ch"></div>
      <p class="foot-note" id="pp-nota"></p>
      <details class="tabla"><summary>Ver los datos en tabla</summary><div class="tabla-wrap" id="pp-tabla"></div></details>`;
    grid.appendChild(card);
    const last=P.fechas.length-1;
    const DEF=["Pedro Sánchez","Alberto Núñez Feijóo","Santiago Abascal","Yolanda Díaz","Gabriel Rufián","Ninguno/a de ellos/as"];
    let base="total", sel=[...DEF]; const ch=mkChart("pp-ch");
    const disponibles=()=>P.orden.filter(o=>P.series[base][o].some(v=>v!=null));
    document.querySelectorAll("#pp-base button").forEach(b=>b.addEventListener("click",()=>{base=b.dataset.v;
      document.querySelectorAll("#pp-base button").forEach(x=>x.setAttribute("aria-pressed",x===b));pinta();}));
    function chips(){
      const S=P.series[base], el=document.getElementById("pp-chips"), vis=sel.filter(o=>disponibles().includes(o)), resto=disponibles().filter(o=>!sel.includes(o));
      el.innerHTML=vis.map(o=>`<span class="chip" title="${o}"><span class="sw" style="background:${COLOR[o]}"></span><span class="nm">${corto(o)}</span><button type="button" data-q="${encodeURIComponent(o)}" aria-label="Quitar ${o}">×</button></span>`).join("")
        +(resto.length?`<select class="add-sel" aria-label="Añadir"><option value="">+ Añadir…</option>${resto.map(o=>`<option value="${encodeURIComponent(o)}">${o} (${nf(S[o][last])} %)</option>`).join("")}</select>`:"")
        +`<button type="button" class="link-btn">Restablecer</button>`;
      el.querySelectorAll(".chip button").forEach(x=>x.addEventListener("click",()=>{sel=sel.filter(o=>o!==decodeURIComponent(x.dataset.q));pinta();}));
      const a=el.querySelector("select"); if(a)a.addEventListener("change",()=>{if(a.value){sel=[...sel,decodeURIComponent(a.value)].sort((x,y)=>P.orden.indexOf(x)-P.orden.indexOf(y));pinta();}});
      el.querySelector(".link-btn").addEventListener("click",()=>{sel=[...DEF];pinta();});
    }
    function pinta(){
      if(!ch)return;
      const S=P.series[base], mov=esMovil(), vis=sel.filter(o=>disponibles().includes(o));
      document.getElementById("pp-subt").textContent=`Preferencia personal como presidente/a del Gobierno · ${base==="total"?"% sobre el total de entrevistados":"% sobre quienes citan a un líder (sin «ninguno», N.S. ni N.C.)"} · ${labL(P.fechas[0])} – ${labL(P.fechas[last])}`;
      document.getElementById("pp-export").dataset.name=`cis_preferencia_presidente_${base}`;
      chips();
      const o=smBaseOption();
      o.grid={left:8,right:mov?16:150,top:16,bottom:34,containLabel:true};
      o.tooltip={...tt,trigger:"axis",axisPointer:{type:"line",lineStyle:{color:SM.c.subtle,width:1}},
        formatter:ps=>{const i=ps[0].dataIndex;const rows=ps.filter(p=>p.value!=null).sort((a,c)=>c.value-a.value)
          .map(p=>`<div style="display:flex;gap:8px;align-items:center;justify-content:space-between"><span><span style="display:inline-block;width:10px;height:3px;border-radius:2px;background:${p.color};margin-right:6px;vertical-align:middle"></span>${p.seriesName}</span><b>${nf(p.value)} %</b></div>`).join("");
          return `<div style="font-weight:600;margin-bottom:4px">${labL(P.fechas[i])} · estudio ${P.estudios[i]} · N=${P.base_n[i].toLocaleString("es-ES")}</div>${rows}`;}};
      o.xAxis={type:"category",data:P.fechas.map(xl),boundaryGap:false,axisLine:{lineStyle:{color:SM.c.grid}},axisTick:{show:false},axisLabel:{color:SM.c.subtle,fontSize:11,interval:mov?5:2,hideOverlap:true}};
      o.yAxis={type:"value",min:0,axisLabel:{color:SM.c.subtle,fontSize:11,formatter:v=>v+" %"},splitLine:{lineStyle:{color:"#EEEBE3"}}};
      o.series=vis.map(n=>({name:corto(n),type:"line",data:S[n],connectNulls:false,showSymbol:false,symbolSize:8,
        lineStyle:{width:2,color:COLOR[n]},itemStyle:{color:COLOR[n]},emphasis:{focus:"series",lineStyle:{width:3}},
        endLabel:{show:!mov,formatter:q=>`${corto(n)}  ${nf(q.value)}`,color:SM.c.tinta,fontSize:11.5,distance:6},labelLayout:{moveOverlap:"shiftY"}}));
      ch.setOption(o,true);
      document.getElementById("pp-nota").textContent="Fuente: Barómetros del CIS (microdatos), preferencia personal como presidente/a del Gobierno (PREFPTE), ponderada con PESO. "+
        "Los nombres de la lista cambian con el tiempo: la línea de un líder empieza cuando el CIS lo incluye (Alvise Pérez, jul-24; Rufián, Moreno Bonilla e Iglesias, feb-25; García-Page, jul-25); antes, quien lo citaba contaba en «Otro/a». "+
        "Coincide con el avance del CIS salvo «Otro/a», que aquí es algo menor porque el CIS suma en «Otro/a» a los líderes con muy pocas menciones. El CIS no hace barómetro en agosto.";
      const idx=P.fechas.map((_,i)=>i).reverse();
      document.getElementById("pp-tabla").innerHTML=`<table><thead><tr><th>${base==="total"?"Sobre el total":"Sobre quienes citan líder"} (%)</th>${idx.map(i=>`<th>${xl(P.fechas[i])}</th>`).join("")}</tr></thead><tbody>${
        vis.map(n=>`<tr><td>${n}</td>${idx.map(i=>{const v=S[n][i];return `<td class="${v==null?"na":""}">${nf(v)}</td>`}).join("")}</tr>`).join("")}</tbody></table>`;
    }
    let rz; window.addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(pinta,200);}); pinta();
  })();

  /* 2 · Índice de aprobación de los cuatro líderes (último barómetro) */
  (function(){
    const A=DATA.cis_aprobacion; if(!A)return;
    const card=document.createElement("div"); card.className="card";
    card.innerHTML=`<div class="card-head"><div><h3>Índice de aprobación de los líderes</h3>
        <p class="subt">% de quienes conocen al líder que le ponen más de un 5 (de 6 a 10) en la escala de valoración de 1 a 10 · ${labL(A.fecha)} (estudio ${A.estudio})</p></div></div>
      <div class="aprob-grid">${A.lideres.map(L=>{
        const dif=L.aprob-L.aprob_ant, cls=Math.abs(dif)<0.05?"eq":dif>0?"up":"down", fl=cls==="up"?"▲":cls==="down"?"▼":"=";
        const col=COLOR[L.lider];
        return `<div class="aprob" style="border-top-color:${col}">
          <div class="aprob-nom">${L.lider}</div>
          <div class="aprob-fila"><span class="aprob-v">${nf(L.aprob)}<small> %</small></span>
            <span class="kpi-d ${cls}" title="Frente a ${labL(A.fecha_ant)}">${fl} ${dif>0?"+":""}${nf(dif)} pp</span></div>
          <div class="aprob-barra" role="img" aria-label="${nf(L.aprob)} % de aprobación"><span style="width:${Math.min(100,L.aprob)}%;background:${col}"></span></div>
          <div class="aprob-pie">Valoración media: <b>${nf(L.media)}</b> · ${labL(A.fecha_ant)}: ${nf(L.aprob_ant)} %</div>
        </div>`;}).join("")}</div>
      <p class="foot-note">Fuente: Barómetro del CIS (microdatos), valoración de líderes (VALORALIDERES), ponderada con PESO. Base: quienes conocen al líder (N.S. y N.C. de la valoración cuentan en la base, como hace el CIS). Variación en puntos porcentuales frente al barómetro anterior (${labL(A.fecha_ant)}). Coincide con la suma de 6 a 10 del avance del CIS.</p>`;
    grid.appendChild(card);
  })();

  /* 3 · Valoración media de los líderes (1-10): evolución, con cruces por sexo, edad y clase social */
  (function(){
    const V=DATA.cis_valoracion; if(!V)return;
    const card=document.createElement("div"); card.className="card";
    card.innerHTML=`<div class="card-head"><div><h3>Valoración media de los líderes</h3><p class="subt" id="vl-subt"></p></div>
        <button class="export-btn" id="vl-export" data-chart="vl-ch" data-name="cis_valoracion_lideres" hidden>⬇ PNG</button></div>
      <div class="ctrls"><label class="sel-lab">Cruzar por <select id="vl-var" class="sel"></select></label>
        <div class="seg" id="vl-modo" role="group" aria-label="Comparar" hidden>
          <button type="button" data-v="lideres" aria-pressed="true">Los 4 líderes en un grupo</button>
          <button type="button" data-v="grupos" aria-pressed="false">Un líder en todos los grupos</button></div></div>
      <div class="ctrls"><div class="seg seg-wrap" id="vl-sel" role="group" aria-label="Elegir"></div></div>
      <div class="chart tall" id="vl-ch"></div>
      <p class="foot-note" id="vl-nota"></p>
      <details class="tabla"><summary>Ver los datos en tabla</summary><div class="tabla-wrap" id="vl-tabla"></div></details>`;
    grid.appendChild(card);
    const GCOL=SM.catLines; // colores de grupo (edad, sexo, clase): serie S&M en orden fijo
    let v="total", modo="lideres", g="Total", lider=V.lideres[0];
    const last=V.fechas.length-1, ch=mkChart("vl-ch");
    const selV=document.getElementById("vl-var");
    selV.innerHTML=V.vars.map(x=>`<option value="${x.id}">${x.nombre}</option>`).join("");
    selV.addEventListener("change",()=>{v=selV.value;g=V.vars.find(x=>x.id===v).grupos[0];botones();pinta();});
    document.querySelectorAll("#vl-modo button").forEach(b=>b.addEventListener("click",()=>{modo=b.dataset.v;
      document.querySelectorAll("#vl-modo button").forEach(x=>x.setAttribute("aria-pressed",x===b));botones();pinta();}));
    function botones(){
      const el=document.getElementById("vl-sel"); document.getElementById("vl-modo").hidden=(v==="total");
      if(v==="total"){el.innerHTML="";el.hidden=true;return;} el.hidden=false;
      const ops=modo==="lideres"?V.vars.find(x=>x.id===v).grupos:V.lideres, act=modo==="lideres"?g:lider;
      el.innerHTML=ops.map(x=>`<button type="button" data-v="${encodeURIComponent(x)}" aria-pressed="${x===act}">${modo==="grupos"?corto(x):x}</button>`).join("");
      el.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{const x=decodeURIComponent(b.dataset.v); if(modo==="lideres")g=x; else lider=x;
        el.querySelectorAll("button").forEach(y=>y.setAttribute("aria-pressed",y===b));pinta();}));
    }
    function pinta(){
      if(!ch)return;
      const mov=esMovil(), nomV=V.vars.find(x=>x.id===v).nombre;
      let lineas;
      if(v==="total"||modo==="lideres"){const D=V.datos[v][v==="total"?"Total":g];
        lineas=V.lideres.map(l=>({nombre:corto(l),color:COLOR[l],m:D[l].m,n:D[l].n}));}
      else {const gs=V.vars.find(x=>x.id===v).grupos;
        lineas=gs.map((x,k)=>({nombre:x,color:GCOL[k],m:V.datos[v][x][lider].m,n:V.datos[v][x][lider].n}));}
      const titulo=v==="total"?"Total de quienes conocen a cada líder":(modo==="lideres"?`${nomV}: ${g}`:`${lider} por ${nomV.toLowerCase()}`);
      document.getElementById("vl-subt").textContent=`Nota media de 1 (muy mal) a 10 (muy bien) · ${titulo} · ${labL(V.fechas[0])} – ${labL(V.fechas[last])}`;
      document.getElementById("vl-export").dataset.name=`cis_valoracion_${v}_${modo==="lideres"?g:lider}`.replace(/[^\wáéíóúñ-]+/gi,"_");
      const o=smBaseOption();
      o.grid={left:8,right:mov?16:150,top:16,bottom:34,containLabel:true};
      o.tooltip={...tt,trigger:"axis",axisPointer:{type:"line",lineStyle:{color:SM.c.subtle,width:1}},
        formatter:ps=>{const i=ps[0].dataIndex;const rows=ps.filter(p=>p.value!=null).sort((a,c)=>c.value-a.value)
          .map(p=>`<div style="display:flex;gap:8px;align-items:center;justify-content:space-between"><span><span style="display:inline-block;width:10px;height:3px;border-radius:2px;background:${p.color};margin-right:6px;vertical-align:middle"></span>${p.seriesName}</span><b>${nf(p.value,2)}</b></div>`).join("");
          return `<div style="font-weight:600;margin-bottom:4px">${labL(V.fechas[i])} · estudio ${V.estudios[i]}</div>${rows}`;}};
      o.xAxis={type:"category",data:V.fechas.map(xl),boundaryGap:false,axisLine:{lineStyle:{color:SM.c.grid}},axisTick:{show:false},axisLabel:{color:SM.c.subtle,fontSize:11,interval:mov?5:2,hideOverlap:true}};
      o.yAxis={type:"value",min:1,max:x=>Math.min(10,Math.ceil(x.max+0.5)),interval:1,axisLabel:{color:SM.c.subtle,fontSize:11},splitLine:{lineStyle:{color:"#EEEBE3"}}};
      o.series=lineas.map(L=>({name:L.nombre,type:"line",data:L.m,connectNulls:false,showSymbol:false,symbolSize:8,
        lineStyle:{width:2,color:L.color},itemStyle:{color:L.color},emphasis:{focus:"series",lineStyle:{width:3}},
        endLabel:{show:!mov,formatter:q=>`${L.nombre}  ${nf(q.value)}`,color:SM.c.tinta,fontSize:11.5,distance:6},labelLayout:{moveOverlap:"shiftY"}}));
      ch.setOption(o,true);
      document.getElementById("vl-nota").textContent="Fuente: Barómetros del CIS (microdatos), valoración de líderes (VALORALIDERES), ponderada con PESO. Media de las notas de 1 a 10 entre quienes conocen al líder (sin N.S. ni N.C.), como el CIS. "+
        "Desde octubre de 2023 (septiembre de 2023 no incluye la pregunta). "+(v==="clase"?"Clase social subjetiva; sin «otras», N.S. ni N.C. ":"")+
        (v!=="total"?"Los grupos más pequeños (18-24 años, clase alta y media alta) tienen unas 170-220 personas que valoran: con unas 200 personas el margen de error de la media ronda ±0,4 puntos (con la desviación típica de unos 3 puntos que publica el CIS), así que subidas y bajadas de ese tamaño pueden ser ruido. ":"")+
        "La escala del eje empieza en 1, el mínimo posible. El CIS no hace barómetro en agosto.";
      const idx=V.fechas.map((_,i)=>i).reverse();
      document.getElementById("vl-tabla").innerHTML=`<table><thead><tr><th>Media (1-10)</th>${idx.map(i=>`<th>${xl(V.fechas[i])}</th>`).join("")}</tr></thead><tbody>${
        lineas.map(L=>`<tr><td>${L.nombre}</td>${idx.map(i=>{const x=L.m[i];return `<td class="${x==null?"na":""}">${nf(x,2)}</td>`}).join("")}</tr>`).join("")}</tbody></table>`;
    }
    botones();
    let rz; window.addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(pinta,200);}); pinta();
  })();
})();

/* ===================== Sociómetro Vasco · Líderes ===================== */
(function(){
  const grid=document.getElementById("grid-soc-lideres"); const S=DATA.soc_lideres; if(!grid||!S)return;
  grid.innerHTML="";
  const MES3=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
  const xl=f=>`${MES3[+f.slice(5)-1]} ${f.slice(2,4)}`;
  const nf=(v,d=1)=>v==null?"–":v.toLocaleString("es-ES",{minimumFractionDigits:d,maximumFractionDigits:d});
  const tt={backgroundColor:"#fff",borderColor:SM.c.grid,borderWidth:1,textStyle:{color:SM.c.tinta,fontFamily:SM.sans,fontSize:12},extraCssText:"box-shadow:0 2px 8px rgba(0,0,0,.12);border-radius:3px"};
  const esMovil=()=>window.innerWidth<640;
  /* Color: el de la fuerza política del puesto; quien ocupó antes ese puesto, en un tono más claro */
  const FCOL={"PNV":PARTY_COLORS["EAJ-PNV"],"EH Bildu":PARTY_COLORS["EH Bildu"],"PSE-EE":PARTY_COLORS["PSOE"],"Podemos / Sumar":PARTY_COLORS["Elkarrekin Podemos"],"PP":PARTY_COLORS["PP"],"Vox":PARTY_COLORS["Vox"]};
  const aclara=(hex,t)=>{const n=parseInt(hex.slice(1),16),r=n>>16,g=(n>>8)&255,b=n&255,m=c=>Math.round(c+(255-c)*t);return "#"+[m(r),m(g),m(b)].map(c=>c.toString(16).padStart(2,"0")).join("");};
  const COLOR={};
  Object.keys(FCOL).forEach(fz=>{const ls=S.lideres.filter(l=>S.fuerza[l]===fz).reverse(); ls.forEach((l,k)=>COLOR[l]=aclara(FCOL[fz],Math.min(.6,k*.32)));});
  const actual=l=>S.actuales.includes(l);
  const last=S.fechas.length-1;
  const baseLinea=(n,data,nombre,color,etq)=>({name:nombre,type:"line",data,connectNulls:false,showSymbol:true,symbol:"circle",symbolSize:5,
    lineStyle:{width:actual(n)?2.2:1.6,color,type:actual(n)?"solid":"dashed"},itemStyle:{color},emphasis:{focus:"series",lineStyle:{width:3}},
    endLabel:{show:etq&&!esMovil(),formatter:q=>`${nombre}  ${etq(q.value)}`,color:SM.c.tinta,fontSize:11.5,distance:6},labelLayout:{moveOverlap:"shiftY"}});
  const ejeX=()=>({type:"category",data:S.fechas.map(xl),boundaryGap:false,axisLine:{lineStyle:{color:SM.c.grid}},axisTick:{show:false},axisLabel:{color:SM.c.subtle,fontSize:11,hideOverlap:true}});
  const ttAxis=(fmt,cab)=>({...tt,trigger:"axis",axisPointer:{type:"line",lineStyle:{color:SM.c.subtle,width:1}},
    formatter:ps=>{const i=ps[0].dataIndex;const rows=ps.filter(p=>p.value!=null).sort((a,c)=>c.value-a.value)
      .map(p=>`<div style="display:flex;gap:8px;align-items:center;justify-content:space-between"><span><span style="display:inline-block;width:10px;height:3px;border-radius:2px;background:${p.color};margin-right:6px;vertical-align:middle"></span>${p.seriesName}</span><b>${fmt(p.value)}</b></div>`).join("");
      return `<div style="font-weight:600;margin-bottom:4px">${cab(i)}</div>${rows}`;}});

  /* 1 · Conocimiento de los líderes: evolución */
  (function(){
    const card=document.createElement("div"); card.className="card";
    card.innerHTML=`<div class="card-head"><div><h3>Conocimiento de los líderes</h3><p class="subt" id="sl-c-subt"></p></div>
        <button class="export-btn" id="sl-c-export" data-chart="sl-c-ch" data-name="sociometro_conocimiento_lideres" hidden>⬇ PNG</button></div>
      <div class="chips" id="sl-c-chips"></div>
      <div class="chart tall" id="sl-c-ch"></div>
      <p class="foot-note" id="sl-c-nota"></p>
      <details class="tabla"><summary>Ver los datos en tabla</summary><div class="tabla-wrap" id="sl-c-tabla"></div></details>`;
    grid.appendChild(card);
    const DEF=[...S.lideres]; let sel=[...DEF]; const ch=mkChart("sl-c-ch");
    function chips(){
      const el=document.getElementById("sl-c-chips"), resto=S.lideres.filter(l=>!sel.includes(l));
      el.innerHTML=sel.map(l=>`<span class="chip" title="${l} (${S.fuerza[l]})"><span class="sw" style="background:${COLOR[l]}"></span><span class="nm">${l}</span><button type="button" data-q="${encodeURIComponent(l)}" aria-label="Quitar ${l}">×</button></span>`).join("")
        +(resto.length?`<select class="add-sel" aria-label="Añadir"><option value="">+ Añadir…</option>${resto.map(l=>`<option value="${encodeURIComponent(l)}">${l}</option>`).join("")}</select>`:"")
        +`<button type="button" class="link-btn">Restablecer</button>`;
      el.querySelectorAll(".chip button").forEach(x=>x.addEventListener("click",()=>{sel=sel.filter(o=>o!==decodeURIComponent(x.dataset.q));pinta();}));
      const a=el.querySelector("select"); if(a)a.addEventListener("change",()=>{if(a.value){sel=[...sel,decodeURIComponent(a.value)].sort((x,y)=>S.lideres.indexOf(x)-S.lideres.indexOf(y));pinta();}});
      el.querySelector(".link-btn").addEventListener("click",()=>{sel=[...DEF];pinta();});
    }
    function pinta(){
      if(!ch)return; const mov=esMovil();
      document.getElementById("sl-c-subt").textContent=`% de entrevistados que dicen conocer a cada líder · ${labL(S.fechas[0])} – ${labL(S.fechas[last])}`;
      chips();
      const o=smBaseOption();
      o.grid={left:8,right:mov?16:160,top:16,bottom:34,containLabel:true};
      o.tooltip=ttAxis(v=>nf(v)+" %",i=>`${labL(S.fechas[i])} · N=${S.base_n[i].toLocaleString("es-ES")}`);
      o.xAxis=ejeX();
      o.yAxis={type:"value",min:0,max:100,axisLabel:{color:SM.c.subtle,fontSize:11,formatter:v=>v+" %"},splitLine:{lineStyle:{color:"#EEEBE3"}}};
      o.series=sel.map(l=>baseLinea(l,S.conoc[l],l,COLOR[l],actual(l)?(v=>nf(v)):null));
      ch.setOption(o,true);
      document.getElementById("sl-c-nota").textContent="Fuente: Sociómetro Vasco (microdatos), pregunta «¿Conoce usted a…?» de cada líder, ponderada (wt). % sobre el total de entrevistados. "+
        "Desde diciembre de 2023 y solo los seis líderes por los que pregunta la última oleada; cada línea empieza cuando el Sociómetro incluye a esa persona (Pradales y Otxandiano, feb-24; Hernández, nov-24). "+
        "Imanol Pradales se pregunta desde feb-24, antes de ser lehendakari. Color de la fuerza política de cada líder. Las oleadas no tienen una periodicidad fija.";
      const idx=S.fechas.map((_,i)=>i).reverse();
      document.getElementById("sl-c-tabla").innerHTML=`<table><thead><tr><th>Conocimiento (%)</th>${idx.map(i=>`<th>${xl(S.fechas[i])}</th>`).join("")}</tr></thead><tbody>${
        sel.map(l=>`<tr><td>${l}</td>${idx.map(i=>{const v=S.conoc[l][i];return `<td class="${v==null?"na":""}">${nf(v)}</td>`}).join("")}</tr>`).join("")}</tbody></table>`;
    }
    let rz; window.addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(pinta,200);}); pinta();
  })();

  /* 2 · Índice de aprobación de los líderes actuales (última oleada) */
  (function(){
    const card=document.createElement("div"); card.className="card";
    card.innerHTML=`<div class="card-head"><div><h3>Índice de aprobación de los líderes</h3>
        <p class="subt">% de quienes conocen al líder que le ponen más de un 5 (de 6 a 10) en la escala de valoración de 0 a 10 · ${labL(S.fecha)}</p></div></div>
      <div class="aprob-grid">${S.aprob.map(L=>{
        const dif=L.aprob_ant==null?null:L.aprob-L.aprob_ant, cls=dif==null?"eq":Math.abs(dif)<0.05?"eq":dif>0?"up":"down", fl=cls==="up"?"▲":cls==="down"?"▼":"=";
        const col=COLOR[L.lider];
        return `<div class="aprob" style="border-top-color:${col}">
          <div class="aprob-nom">${L.lider}</div>
          <div class="aprob-fila"><span class="aprob-v">${nf(L.aprob)}<small> %</small></span>
            ${dif==null?"":`<span class="kpi-d ${cls}" title="Frente a ${labL(S.fecha_ant)}">${fl} ${dif>0?"+":""}${nf(dif)} pp</span>`}</div>
          <div class="aprob-barra" role="img" aria-label="${nf(L.aprob)} % de aprobación"><span style="width:${Math.min(100,L.aprob)}%;background:${col}"></span></div>
          <div class="aprob-pie">Valoración media: <b>${nf(L.media)}</b> · Le conoce: ${nf(L.conoc)} % · ${labL(S.fecha_ant)}: ${nf(L.aprob_ant)} %</div>
        </div>`;}).join("")}</div>
      <p class="foot-note">Fuente: Sociómetro Vasco (microdatos), pregunta «¿Cómo valora a…?» (escala de 0 a 10), ponderada (wt). Base: quienes conocen al líder; quienes lo conocen pero no saben o no contestan cuentan en la base, igual que en el índice del CIS. Variación en puntos porcentuales frente a la oleada anterior (${labL(S.fecha_ant)}). Ojo: la escala del Sociómetro va de 0 a 10 y la del CIS de 1 a 10, así que los índices de las dos fuentes no son comparables.</p>`;
    grid.appendChild(card);
  })();

  /* 3 · Valoración media (0-10): evolución, con cruces por sexo, edad y clase social */
  (function(){
    const card=document.createElement("div"); card.className="card";
    card.innerHTML=`<div class="card-head"><div><h3>Valoración media de los líderes</h3><p class="subt" id="sl-v-subt"></p></div>
        <button class="export-btn" id="sl-v-export" data-chart="sl-v-ch" data-name="sociometro_valoracion_lideres" hidden>⬇ PNG</button></div>
      <div class="ctrls"><label class="sel-lab">Cruzar por <select id="sl-v-var" class="sel"></select></label>
        <div class="seg" id="sl-v-modo" role="group" aria-label="Comparar" hidden>
          <button type="button" data-v="lideres" aria-pressed="true">Todos los líderes en un grupo</button>
          <button type="button" data-v="grupos" aria-pressed="false">Un líder en todos los grupos</button></div></div>
      <div class="ctrls"><div class="seg seg-wrap" id="sl-v-sel" role="group" aria-label="Elegir"></div></div>
      <div class="chart tall" id="sl-v-ch"></div>
      <p class="foot-note" id="sl-v-nota"></p>
      <details class="tabla"><summary>Ver los datos en tabla</summary><div class="tabla-wrap" id="sl-v-tabla"></div></details>`;
    grid.appendChild(card);
    const GCOL=SM.catLines;
    let v="total", modo="lideres", g="Total", lider=S.actuales[0];
    const ch=mkChart("sl-v-ch"), selV=document.getElementById("sl-v-var");
    const ordenL=[...S.actuales,...S.lideres.filter(l=>!actual(l))];
    selV.innerHTML=S.vars.map(x=>`<option value="${x.id}">${x.nombre}</option>`).join("");
    selV.addEventListener("change",()=>{v=selV.value;g=S.vars.find(x=>x.id===v).grupos[0];botones();pinta();});
    document.querySelectorAll("#sl-v-modo button").forEach(b=>b.addEventListener("click",()=>{modo=b.dataset.v;
      document.querySelectorAll("#sl-v-modo button").forEach(x=>x.setAttribute("aria-pressed",x===b));botones();pinta();}));
    function botones(){
      const el=document.getElementById("sl-v-sel"); document.getElementById("sl-v-modo").hidden=(v==="total");
      if(v==="total"){el.innerHTML="";el.hidden=true;return;} el.hidden=false;
      const ops=modo==="lideres"?S.vars.find(x=>x.id===v).grupos:ordenL, act=modo==="lideres"?g:lider;
      el.innerHTML=ops.map(x=>`<button type="button" data-v="${encodeURIComponent(x)}" aria-pressed="${x===act}">${x}</button>`).join("");
      el.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{const x=decodeURIComponent(b.dataset.v); if(modo==="lideres")g=x; else lider=x;
        el.querySelectorAll("button").forEach(y=>y.setAttribute("aria-pressed",y===b));pinta();}));
    }
    function pinta(){
      if(!ch)return;
      const mov=esMovil(), nomV=S.vars.find(x=>x.id===v).nombre;
      let lineas;
      if(v==="total"||modo==="lideres"){const D=S.datos[v][v==="total"?"Total":g];
        lineas=S.lideres.map(l=>({id:l,nombre:l,color:COLOR[l],m:D[l].m,n:D[l].n,dash:!actual(l),etq:actual(l)}));}
      else {const gs=S.vars.find(x=>x.id===v).grupos;
        lineas=gs.map((x,k)=>({id:lider,nombre:x,color:GCOL[k],m:S.datos[v][x][lider].m,n:S.datos[v][x][lider].n,dash:false,etq:true}));}
      const titulo=v==="total"?"Total de quienes conocen a cada líder":(modo==="lideres"?`${nomV}: ${g}`:`${lider} por ${nomV.toLowerCase()}`);
      document.getElementById("sl-v-subt").textContent=`Nota media de 0 (muy mal) a 10 (muy bien) · ${titulo} · ${labL(S.fechas[0])} – ${labL(S.fechas[last])}`;
      document.getElementById("sl-v-export").dataset.name=`sociometro_valoracion_${v}_${modo==="lideres"?g:lider}`.replace(/[^\wáéíóúñ-]+/gi,"_");
      const o=smBaseOption();
      o.grid={left:8,right:mov?16:160,top:16,bottom:34,containLabel:true};
      o.tooltip=ttAxis(x=>nf(x,2),i=>labL(S.fechas[i]));
      o.xAxis=ejeX();
      o.yAxis={type:"value",min:0,max:x=>Math.min(10,Math.ceil(x.max+0.5)),interval:1,axisLabel:{color:SM.c.subtle,fontSize:11},splitLine:{lineStyle:{color:"#EEEBE3"}}};
      o.series=lineas.map(L=>{const s=baseLinea(L.id,L.m,L.nombre,L.color,L.etq?(x=>nf(x)):null);
        s.lineStyle.type=L.dash?"dashed":"solid"; s.lineStyle.width=L.dash?1.6:2.2; return s;});
      ch.setOption(o,true);
      const hayHuecos=v!=="total"&&lineas.some(L=>L.n.some((k,i)=>k!=null&&k<30));
      document.getElementById("sl-v-nota").textContent="Fuente: Sociómetro Vasco (microdatos), pregunta «¿Cómo valora a…?», ponderada (wt). Media de las notas de 0 a 10 entre quienes conocen al líder y le ponen nota (sin N.S. ni N.C.). "+
        "Desde diciembre de 2023 y solo los seis líderes de la última oleada (Pradales y Otxandiano desde feb-24; Hernández desde nov-24). "+
        (v==="clase"?"Clase social subjetiva (3 categorías); dic-23 no pregunta la clase social. ":"")+
        (v!=="total"?"No se muestran las medias de grupos con menos de 30 personas que valoran"+(hayHuecos?" (por eso faltan algunos puntos)":"")+". Con unas 100 personas que valoran, el margen de error de la media está entre ±0,4 y ±0,6 puntos (según la dispersión de las notas de cada líder): movimientos de ese tamaño pueden ser ruido. ":"")+
        "La escala del Sociómetro va de 0 a 10 (la del CIS, de 1 a 10): las medias de las dos fuentes no son comparables.";
      const idx=S.fechas.map((_,i)=>i).reverse();
      document.getElementById("sl-v-tabla").innerHTML=`<table><thead><tr><th>Media (0-10)</th>${idx.map(i=>`<th>${xl(S.fechas[i])}</th>`).join("")}</tr></thead><tbody>${
        lineas.filter(L=>L.m.some(x=>x!=null)).map(L=>`<tr><td>${L.nombre}</td>${idx.map(i=>{const x=L.m[i];return `<td class="${x==null?"na":""}">${nf(x,2)}</td>`}).join("")}</tr>`).join("")}</tbody></table>`;
    }
    botones();
    let rz; window.addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(pinta,200);}); pinta();
  })();
})();

/* ===================== Autoubicación ideológica (módulo común CIS y Sociómetro) ===================== */
function montarIdeologia(C){
  const grid=document.getElementById(C.grid); const I=C.data; if(!grid||!I)return;
  const P=C.pre; if(C.limpiar)grid.innerHTML="";
  const MES3=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
  const xl=f=>`${MES3[+f.slice(5)-1]} ${f.slice(2,4)}`;
  const nf=(v,d=1)=>v==null?"–":v.toLocaleString("es-ES",{minimumFractionDigits:d,maximumFractionDigits:d});
  const tt={backgroundColor:"#fff",borderColor:SM.c.grid,borderWidth:1,textStyle:{color:SM.c.tinta,fontFamily:SM.sans,fontSize:12},extraCssText:"box-shadow:0 2px 8px rgba(0,0,0,.12);border-radius:3px"};
  const esMovil=()=>window.innerWidth<640;
  const VCOL=C.vcol;

  /* Media por oleada (eje vertical) y posición en la escala (eje horizontal) */
  const card=document.createElement("div"); card.className="card";
  card.innerHTML=`<div class="card-head"><div><h3>${C.titulo||"Autoubicación ideológica"}</h3><p class="subt" id="${P}subt"></p></div>
      <button class="export-btn" id="${P}export" data-chart="${P}ch" data-name="${C.exp}" hidden>⬇ PNG</button></div>
    <div class="ctrls"><label class="sel-lab">Cruzar por <select id="${P}var" class="sel"></select></label></div>
    <div class="chart" id="${P}ch" style="height:${C.alto}px"></div>
    <p class="foot-note" id="${P}nota"></p>
    <details class="tabla"><summary>Ver los datos en tabla</summary><div class="tabla-wrap" id="${P}tabla"></div></details>`;
  grid.appendChild(card);
  let v="total"; const ch=mkChart(P+"ch"), selV=document.getElementById(P+"var");
  selV.innerHTML=I.vars.map(x=>`<option value="${x.id}">${x.nombre}</option>`).join("");
  selV.addEventListener("change",()=>{v=selV.value;pinta();});
  const TOT=I.datos.total.Total;
  function pinta(){
    if(!ch)return;
    const mov=esMovil(), VV=I.vars.find(x=>x.id===v), gs=VV.grupos;
    const lineas=gs.map((g,k)=>({nombre:v==="total"?C.totNom:g,color:v==="total"?SM.c.tinta:(v==="voto"?VCOL[g]:SM.catLines[k]),D:I.datos[v][g]}));
    document.getElementById(P+"subt").textContent=`${C.subt} · ${v==="total"?C.totNom:VV.nombre} · ${labL(I.fechas[0])} – ${labL(I.fechas[I.fechas.length-1])}`;
    document.getElementById(P+"export").dataset.name=`${C.exp}_${v}`;
    const o=smBaseOption();
    const estrecho=ch.getWidth()<760;   /* tarjeta a media anchura (dos gráficos lado a lado) */
    o.grid={left:8,right:(mov||estrecho)?16:56,top:v==="total"?24:((mov||estrecho)?78:52),bottom:40,containLabel:true};
    o.legend=v==="total"?{show:false}:{top:0,left:0,right:0,itemWidth:14,itemHeight:8,textStyle:{color:SM.c.tinta,fontSize:12},
      data:[...lineas.map(L=>L.nombre),C.totNom]};
    o.tooltip={...tt,trigger:"axis",axisPointer:{type:"line",axis:"y",lineStyle:{color:SM.c.subtle,width:1}},
      formatter:ps=>{const i=ps[0].dataIndex;const rows=ps.filter(p=>p.value&&p.value[0]!=null).sort((a,c)=>a.value[0]-c.value[0])
        .map(p=>`<div style="display:flex;gap:10px;align-items:center;justify-content:space-between"><span><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${p.color};margin-right:6px;vertical-align:middle"></span>${p.seriesName}</span><b>${nf(p.value[0],2)}</b></div>`).join("");
        return `<div style="font-weight:600;margin-bottom:4px">${C.cab(i,v)}</div>${rows}<div style="color:${SM.c.subtle};margin-top:4px;font-size:11px">${C.pista||"Más bajo = más a la izquierda"}</div>`;}};
    o.yAxis={type:"category",data:I.fechas.map(xl),boundaryGap:true,axisLine:{lineStyle:{color:SM.c.grid}},axisTick:{show:false},
      axisLabel:{color:SM.c.subtle,fontSize:11,interval:0},splitLine:{show:true,lineStyle:{color:"#F3F0E8"}}};
    o.xAxis={type:"value",min:C.min,max:C.max,interval:1,position:"bottom",axisLabel:{color:SM.c.subtle,fontSize:11,formatter:x=>x===C.min?((mov||estrecho)?x+"\n"+(C.izqC||"Izq."):x+"\n"+C.izq):x===C.max?((mov||estrecho)?x+"\n"+(C.derC||"Der."):x+"\n"+C.der):String(x)},
      splitLine:{lineStyle:{color:"#EEEBE3"}}};
    const serie=(L,extra)=>({name:L.nombre,type:"line",data:L.D.m.map((m,i)=>[m,i]),connectNulls:false,showSymbol:true,symbol:"circle",symbolSize:mov?5:7,
      lineStyle:{width:2,color:L.color},itemStyle:{color:L.color},emphasis:{focus:"series",lineStyle:{width:3}},...extra});
    o.series=lineas.map(L=>serie(L,{}));
    if(v!=="total") o.series.push(serie({nombre:C.totNom,color:"#9A968C",D:TOT},{lineStyle:{width:1.5,type:"dashed",color:"#9A968C"},symbolSize:4,z:1}));
    o.series[0].markLine={silent:true,symbol:"none",lineStyle:{color:SM.c.subtle,type:"dotted",width:1},
      label:{formatter:C.midLab,color:SM.c.subtle,fontSize:10.5,position:"end"},data:[{xAxis:C.mid}]};
    ch.setOption(o,true);
    document.getElementById(P+"nota").textContent=C.nota(v);
    const idx=I.fechas.map((_,i)=>i).reverse();
    document.getElementById(P+"tabla").innerHTML=`<table><thead><tr><th>${C.unidad}</th>${lineas.map(L=>`<th>${L.nombre}</th>`).join("")}${v==="total"?"<th>N.S./N.C. (%)</th><th>n que se ubica</th>":""}</tr></thead><tbody>${
      idx.map(i=>`<tr><td>${xl(I.fechas[i])}</td>${lineas.map(L=>{const x=L.D.m[i];return `<td class="${x==null?"na":""}">${nf(x,2)}</td>`}).join("")}${v==="total"?`<td>${nf(TOT.ns[i])}</td><td>${TOT.n[i]==null?"–":TOT.n[i].toLocaleString("es-ES")}</td>`:""}</tr>`).join("")}</tbody></table>`;
  }
  let rz; window.addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(pinta,200);}); pinta();
}

/* CIS · Ideología */
montarIdeologia({grid:"grid-cis-ideologia",limpiar:true,pre:"id-",data:DATA.cis_ideologia,exp:"cis_autoubicacion_ideologica",alto:760,
  totNom:"Total España",unidad:"Barómetro",min:1,max:10,mid:5.5,izq:"Izquierda",der:"Derecha",midLab:"Punto medio de la escala (5,5)",
  subt:"Media de la escala de autoubicación ideológica, de 1 (izquierda) a 10 (derecha)",
  vcol:{"PP":PARTY_COLORS["PP"],"PSOE":PARTY_COLORS["PSOE"],"VOX":PARTY_COLORS["VOX"],"Sumar":PARTY_COLORS["Sumar"],"No votó":"#014550"},
  cab:i=>`${labL(DATA.cis_ideologia.fechas[i])} · estudio ${DATA.cis_ideologia.estudios[i]}`,
  nota:v=>"Fuente: Barómetros del CIS (microdatos), «Escala de autoubicación ideológica (1-10)» (ESCIDEOL), ponderada con el peso de cada estudio. Media de quienes se ubican (sin N.S. ni N.C.; su % está en la tabla). "+
    "El punto medio de una escala de 1 a 10 es 5,5, no 5. Barómetros más recientes arriba; el CIS no hace barómetro en agosto. "+
    (v==="voto"?"Recuerdo de voto en las generales de 2023; septiembre de 2023 pregunta por las de 2019 y queda fuera de este cruce. No se muestran los votantes de otros partidos (ERC, Junts, EH Bildu, EAJ-PNV, BNG…): juntos no forman un grupo con sentido ideológico y por separado son muy pocos. ":"")+
    (v==="clase"?"Clase social subjetiva; sin «otras», N.S. ni N.C. ":"")+
    (v!=="total"?"En gris discontinuo, el total de España como referencia. El grupo más pequeño (VOX en recuerdo, 18-24 años, clase alta y media alta) tiene unas 180-240 personas que se ubican por barómetro: con ese tamaño la media puede moverse unas décimas por azar. ":"")});

/* Sociómetro · Identidad e ideología */
/* Sociómetro · autoubicación ideológica y sentimiento nacionalista, lado a lado */
(function(){const g=document.getElementById("grid-soc-identidad"); if(!g)return; g.innerHTML="";
  const par=document.createElement("div"); par.id="soc-par-escalas"; par.className="par-escalas"; g.appendChild(par);})();
montarIdeologia({grid:"soc-par-escalas",limpiar:false,pre:"sid-",data:DATA.soc_ideologia,exp:"sociometro_autoubicacion_ideologica",alto:520,
  totNom:"Total Euskadi",unidad:"Oleada",min:0,max:10,mid:5,izq:"Extrema izquierda",der:"Extrema derecha",midLab:"Centro de la escala (5)",
  subt:"Media de la escala de autoubicación ideológica, de 0 (extrema izquierda) a 10 (extrema derecha)",
  vcol:{"PNV":PARTY_COLORS["EAJ-PNV"],"EH Bildu":PARTY_COLORS["EH Bildu"],"PSE-EE":PARTY_COLORS["PSOE"],"PP":PARTY_COLORS["PP"],"No votó":"#1A1A1A"},
  cab:(i,v)=>{const S=DATA.soc_ideologia;return `${labL(S.fechas[i])}${v==="voto"&&S.eleccion[i]?` · recuerdo: ${S.eleccion[i]}`:""}`;},
  nota:v=>"Fuente: Sociómetro Vasco (microdatos), pregunta de autoubicación en la escala de 0 («extrema izquierda») a 10 («extrema derecha»), con el 5 como «centro», ponderada (wt). Media de quienes se ubican (sin NS/NC; su % está en la tabla). "+
    "Oleadas más recientes arriba; no tienen una periodicidad fija. La escala va de 0 a 10 (la del CIS, de 1 a 10): las medias de las dos fuentes no son comparables. "+
    (v==="voto"?"Recuerdo de voto de la elección que pregunta cada oleada (autonómicas o Juntas Generales; se ve en el tooltip). No se muestran los votantes de otros partidos (Elkarrekin Podemos, Sumar, Vox y otras candidaturas): juntos no forman un grupo con sentido ideológico y Vox, por separado, tiene muy pocos casos. Los votantes del PP son pocos en la muestra (entre unas 50 y 100 personas por oleada): su media puede moverse bastante por azar. ":"")+
    (v==="clase"?"Clase social subjetiva (3 categorías); dic-21 y dic-23 no preguntan la clase social. ":"")+
    (v==="edad"?"El grupo de 18-24 años tiene entre unas 90 y 200 personas que se ubican por oleada: su media puede moverse unas décimas por azar. ":"")+
    (v!=="total"?"En gris discontinuo, el total de Euskadi como referencia. ":"")});

montarIdeologia({grid:"soc-par-escalas",limpiar:false,pre:"snac-",data:DATA.soc_nacionalismo,exp:"sociometro_sentimiento_nacionalista",alto:520,
  titulo:"Sentimiento nacionalista",pista:"Más alto = más nacionalista o abertzale",
  totNom:"Total Euskadi",unidad:"Oleada",min:0,max:10,mid:5,izq:"Nada nacionalista",der:"Muy nacionalista",izqC:"Nada",derC:"Muy",midLab:"Punto medio de la escala (5)",
  subt:"Media de la escala de sentimiento nacionalista vasco o abertzale, de 0 (nada) a 10 (muy nacionalista)",
  vcol:{"PNV":PARTY_COLORS["EAJ-PNV"],"EH Bildu":PARTY_COLORS["EH Bildu"],"PSE-EE":PARTY_COLORS["PSOE"],"PP":PARTY_COLORS["PP"],"No votó":"#1A1A1A"},
  cab:(i,v)=>{const S=DATA.soc_nacionalismo;return `${labL(S.fechas[i])}${v==="voto"&&S.eleccion[i]?` · recuerdo: ${S.eleccion[i]}`:""}`;},
  nota:v=>"Fuente: Sociómetro Vasco (microdatos), pregunta sobre el sentimiento nacionalista vasco o abertzale en la escala de 0 («nada nacionalista o abertzale») a 10 («muy nacionalista o abertzale»), ponderada (wt). Media de quienes responden (sin NS/NC; su % está en la tabla). "+
    "Oleadas más recientes arriba; la pregunta no está en junio de 2022 (fila vacía). "+
    (v==="voto"?"Recuerdo de voto de la elección que pregunta cada oleada (autonómicas o Juntas Generales; se ve en el tooltip). No se muestran los votantes de otros partidos (Elkarrekin Podemos, Sumar, Vox y otras candidaturas). Los votantes del PP son pocos en la muestra (entre unas 50 y 100 personas por oleada): su media puede moverse bastante por azar. ":"")+
    (v==="clase"?"Clase social subjetiva (3 categorías); dic-21 y dic-23 no preguntan la clase social. ":"")+
    (v==="edad"?"El grupo de 18-24 años tiene entre unas 90 y 200 personas que responden por oleada: su media puede moverse unas décimas por azar. ":"")+
    (v!=="total"?"En gris discontinuo, el total de Euskadi como referencia. ":"")});

/* Sociómetro · Mapa de cuadrantes: autoubicación ideológica (X) × sentimiento nacionalista (Y) de los votantes de cada partido */
(function(){
  const grid=document.getElementById("grid-soc-identidad"); const Q=DATA.soc_cuadrantes; if(!grid||!Q)return;
  const nf=(v,d=1)=>v==null?"–":v.toLocaleString("es-ES",{minimumFractionDigits:d,maximumFractionDigits:d});
  const esMovil=()=>window.innerWidth<640;
  const COL={"PNV":PARTY_COLORS["EAJ-PNV"],"EH Bildu":PARTY_COLORS["EH Bildu"],"PSE-EE":PARTY_COLORS["PSOE"],"PP":PARTY_COLORS["PP"],"Elkarrekin Podemos":PARTY_COLORS["Elkarrekin Podemos"],"Sumar":PARTY_COLORS["Sumar"],"Vox":PARTY_COLORS["Vox"],"Total":SM.c.tinta};
  const PARTS=["EH Bildu","Elkarrekin Podemos","Sumar","PSE-EE","PNV","PP","Vox","Total"];
  const tam=(d,mov)=>d.g==="Total"?10:Math.max(9,(mov?11:14)*Math.sqrt(d.rec));   /* área del círculo proporcional al % de recuerdo de voto */
  const POCOS=50;
  const rgba=(hex,a)=>{const n=parseInt(hex.slice(1),16);return `rgba(${n>>16},${(n>>8)&255},${n&255},${a})`;};   /* relleno transparente sin apagar la etiqueta */
  const card=document.createElement("div"); card.className="card";
  card.innerHTML=`<div class="card-head"><div><h3>Ideología y sentimiento nacionalista de los votantes de cada partido</h3>
      <p class="subt" id="cq-subt"></p></div>
      <button class="export-btn" id="cq-export" data-chart="cq-ch" data-name="sociometro_cuadrantes" hidden>⬇ PNG</button></div>
    <div class="deslizador">
      <div class="deslizador-cab"><span>Oleada:</span> <b id="cq-oleada"></b></div>
      <input type="range" id="cq-ola" min="0" step="1" aria-label="Oleada">
      <div class="deslizador-marcas"><span id="cq-ini"></span><span id="cq-fin"></span></div>
    </div>
    <div class="ctrls"><div class="seg" id="cq-tray" role="group" aria-label="Recorrido">
        <button type="button" data-v="0" aria-pressed="true">Solo la oleada</button>
        <button type="button" data-v="1" aria-pressed="false">Con el recorrido</button></div></div>
    <div class="ctrls" id="cq-partbar" hidden><div class="seg seg-wrap" id="cq-part" role="group" aria-label="Partido"></div>
      <button type="button" class="link-btn" id="cq-play" hidden>▶ Repetir el recorrido</button></div>
    <div class="chart" id="cq-ch" style="height:560px"></div>
    <p class="foot-note" id="cq-nota"></p>
    <details class="tabla"><summary>Ver los datos en tabla</summary><div class="tabla-wrap" id="cq-tabla"></div></details>`;
  grid.appendChild(card);
  const MES3=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"], xl=f=>`${MES3[+f.slice(5)-1]} ${f.slice(2,4)}`;
  let f=Q.fechas[Q.fechas.length-1], tray=false, part=null, timer=null; const ch=mkChart("cq-ch");
  const parar=()=>{if(timer){clearInterval(timer);timer=null;}};
  /* partidos con recorrido (al menos 2 oleadas con dato propio) */
  const serie=g=>Q.fechas.map(x=>({x,d:Q.puntos[x].find(p=>p.g===g&&!p.prev)})).filter(o=>o.d);
  const CONREC=PARTS.filter(g=>g!=="Total"&&serie(g).length>1);
  const fijaOla=k=>{const r=document.getElementById("cq-ola"); r.value=k; f=Q.fechas[k]; document.getElementById("cq-oleada").textContent=labL(f);};
  function reproducir(){   /* recorre automáticamente las oleadas del partido elegido */
    parar(); const ks=serie(part).map(o=>Q.fechas.indexOf(o.x)); let i=0;
    fijaOla(ks[0]); pinta();
    timer=setInterval(()=>{i++; if(i>=ks.length){parar();return;} fijaOla(ks[i]); pinta();},750);
  }
  function botonesPartido(){
    const el=document.getElementById("cq-part");
    el.innerHTML=[`<button type="button" data-v="" aria-pressed="${part===null}">Todos</button>`,...CONREC.map(g=>`<button type="button" data-v="${encodeURIComponent(g)}" aria-pressed="${part===g}"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${COL[g]};margin-right:5px;vertical-align:middle"></span>${g}</button>`)].join("");
    el.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{const g=decodeURIComponent(b.dataset.v)||null; part=g;
      el.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x===b)); document.getElementById("cq-play").hidden=!part;
      if(part)reproducir(); else {parar(); fijaOla(Q.fechas.length-1); pinta();}}));
  }
  document.getElementById("cq-play").addEventListener("click",()=>{if(part)reproducir();});
  const sel=document.getElementById("cq-ola"); sel.max=Q.fechas.length-1; sel.value=Q.fechas.length-1;
  document.getElementById("cq-ini").textContent=xl(Q.fechas[0]); document.getElementById("cq-fin").textContent=xl(Q.fechas[Q.fechas.length-1]);
  document.getElementById("cq-oleada").textContent=labL(f);
  sel.addEventListener("input",()=>{parar(); f=Q.fechas[+sel.value]; document.getElementById("cq-oleada").textContent=labL(f); pinta();});
  document.querySelectorAll("#cq-tray button").forEach(b=>b.addEventListener("click",()=>{tray=b.dataset.v==="1";
    document.querySelectorAll("#cq-tray button").forEach(x=>x.setAttribute("aria-pressed",x===b));
    document.getElementById("cq-partbar").hidden=!tray; if(!tray){parar(); part=null; document.getElementById("cq-play").hidden=true;} botonesPartido(); pinta();}));
  function pinta(){
    if(!ch)return; const mov=esMovil(), P=Q.puntos[f];
    document.getElementById("cq-subt").textContent=`Media de la autoubicación ideológica (0 extrema izquierda – 10 extrema derecha) y del sentimiento nacionalista vasco o abertzale (0 nada – 10 muy nacionalista) · votantes según su recuerdo de voto${Q.eleccion[f]?" ("+Q.eleccion[f]+")":""} · ${labL(f)}`;
    const o=smBaseOption();
    o.grid={left:mov?26:34,right:mov?18:30,top:20,bottom:44,containLabel:true};
    o.tooltip={backgroundColor:"#fff",borderColor:SM.c.grid,borderWidth:1,textStyle:{color:SM.c.tinta,fontFamily:SM.sans,fontSize:12},trigger:"item",
      formatter:q=>{const d=q.data.d; if(!d)return ""; return `<div style="font-weight:600;margin-bottom:4px">${d.g==="Total"?"Total Euskadi":"Votantes "+d.g} · ${labL(q.data.f)}</div>${d.prev?`<div style="color:#B3541E;font-size:11px;margin-bottom:3px">Esta oleada no recoge su recuerdo de voto: dato de ${labL(d.prev)}</div>`:""}${d.rec!=null?`Recuerdo de voto: <b>${nf(d.rec)} %</b> de los entrevistados<br>`:""}Ideología: <b>${nf(d.x,2)}</b><br>Sentimiento nacionalista: <b>${nf(d.y,2)}</b>${d.g!=="Total"&&Math.min(d.ni,d.nn)<POCOS?`<div style="color:#B3541E;font-size:11px;margin-top:3px">Pocos casos: posición poco fiable</div>`:""}<div style="color:${SM.c.subtle};font-size:11px;margin-top:3px">${d.ni.toLocaleString("es-ES")} se ubican en ideología · ${d.nn.toLocaleString("es-ES")} en nacionalismo</div>`;}};
    /* zoom: con un partido elegido, los ejes se ajustan a su recorrido completo */
    let zx=[0,10], zy=[0,10];
    if(tray&&part){const S=serie(part).map(o=>o.d), xs=S.map(d=>d.x), ys=S.map(d=>d.y);
      const cx=(Math.min(...xs)+Math.max(...xs))/2, cy=(Math.min(...ys)+Math.max(...ys))/2;
      const sp=Math.max(Math.max(...xs)-Math.min(...xs),Math.max(...ys)-Math.min(...ys),1)+0.8;
      const lim=c=>{let a=Math.max(0,c-sp/2), b=Math.min(10,c+sp/2); if(b-a<sp-1e-6){if(a<=1e-9)b=Math.min(10,sp); else a=Math.max(0,10-sp);}   /* tolerancia: sin ella, el redondeo desplazaba el zoom */ return [Math.floor(a*2)/2,Math.ceil(b*2)/2];};
      zx=lim(cx); zy=lim(cy);}
    const zoom=zx[1]-zx[0]<10||zy[1]-zy[0]<10, paso=zoom?0.5:1;
    o.xAxis={type:"value",min:zx[0],max:zx[1],interval:paso,name:mov?"Ideología →":"Autoubicación ideológica →",nameLocation:"middle",nameGap:28,nameTextStyle:{color:SM.c.subtle,fontSize:11},
      axisLabel:{color:SM.c.subtle,fontSize:11,formatter:x=>mov||zoom?nf(x,x%1?1:0):(x===0?"0 Izq.":x===10?"10 Der.":String(x))},splitLine:{lineStyle:{color:"#F1EEE6"}}};
    o.yAxis={type:"value",min:zy[0],max:zy[1],interval:paso,axisLabel:{color:SM.c.subtle,fontSize:11,formatter:x=>nf(x,x%1?1:0)},name:mov?"Nacionalismo →":"Sentimiento nacionalista →",nameLocation:"middle",nameGap:mov?30:36,nameRotate:90,nameTextStyle:{color:SM.c.subtle,fontSize:11},
      splitLine:{lineStyle:{color:"#F1EEE6"}}};
    o.animation=false;   /* al mover la barra, sin transición: si no, ECharts interpola los círculos entre partidos */
    const cuad=[["Izquierda y\nnacionalista",2.5,9.5],["Derecha y\nnacionalista",7.5,9.5],["Izquierda y no\nnacionalista",2.5,0.6],["Derecha y no\nnacionalista",7.5,0.6]];
    o.series=[{type:"scatter",data:[],silent:true,markLine:{silent:true,symbol:"none",lineStyle:{color:SM.c.subtle,type:"dashed",width:1},label:{show:false},data:[{xAxis:5},{yAxis:5}]},
        markArea:{silent:true,itemStyle:{color:"rgba(0,0,0,0)"},label:{show:false},data:[]}},
      {type:"scatter",silent:true,symbolSize:0,data:zoom?[]:cuad.map(c=>({value:[c[1],c[2]],label:{show:true,formatter:c[0],color:"#B0AA9C",fontSize:mov?10:12,fontWeight:600,lineHeight:mov?12:15}})),z:1}];
    if(tray){const fs=Q.fechas.filter(x=>x<=f);
      (part?[part]:PARTS).forEach(g=>{const pts=fs.map(x=>{const d=Q.puntos[x].find(p=>p.g===g&&!p.prev);return d?{value:[d.x,d.y],d,f:x}:null;}).filter(Boolean);
        o.series.push({type:"line",data:pts,showSymbol:true,symbol:"circle",symbolSize:part?7:4,tooltip:{show:!!part},lineStyle:{color:COL[g],width:part?2.4:1.8,opacity:.9},itemStyle:{color:COL[g],opacity:.9},z:4,smooth:false,
          label:{show:!!part,position:"top",distance:6,formatter:q=>(q.dataIndex===0)?xl(q.data.f):"",color:SM.c.subtle,fontSize:10.5}});   /* fecha solo en el punto de partida; el resto, en el tooltip */   /* por debajo de los círculos finales */});}
    o.series.push({type:"scatter",z:5,labelLayout:{moveOverlap:"shiftY"},data:[...P].filter(d=>!(tray&&part)||(d.g===part&&!d.prev)).sort((a,b)=>(b.rec||0)-(a.rec||0)).map(d=>{const poco=d.g!=="Total"&&(Math.min(d.ni,d.nn)<POCOS||!!d.prev);return {value:[d.x,d.y],d,f,symbolSize:tray?(d.g==="Total"?12:(mov?14:17)):tam(d,mov),   /* con el recorrido: todos iguales; destacan como final del recorrido */
      itemStyle:poco?{color:"rgba(255,255,255,.9)",borderColor:COL[d.g],borderWidth:tray?2.5:2,borderType:"dashed",shadowBlur:tray?8:0,shadowColor:"rgba(0,0,0,.35)"}:(tray?{color:COL[d.g],borderColor:"#fff",borderWidth:2.5,shadowBlur:8,shadowColor:"rgba(0,0,0,.45)"}:{color:COL[d.g],opacity:.88,borderColor:"#fff",borderWidth:1.5}),
      label:{show:true,position:d.g==="Total"?"bottom":d.g==="Sumar"?(mov?"bottom":"left"):d.g==="Elkarrekin Podemos"?(mov?"top":"left"):(mov&&d.g==="Vox")?"top":"right",distance:6,formatter:(tray&&part)?`${mov&&d.g==="Elkarrekin Podemos"?"E. Podemos":d.g} · ${xl(f)}`:mov?(d.g==="Total"?"Total":d.g==="Elkarrekin Podemos"?"E. Podemos":d.g+(d.prev?" ("+xl(d.prev)+")":"")):`${d.g==="Total"?"Total Euskadi":d.g}${d.rec!=null?" "+nf(d.rec)+" %":""}${d.prev?" (dato de "+xl(d.prev)+")":""}`,color:d.g==="Total"?SM.c.tinta:COL[d.g],fontWeight:600,fontSize:mov?10.5:12.5}};})});
    o.graphic=[smLogoGraphic()];
    ch.setOption(o,true);
    document.getElementById("cq-nota").textContent="Fuente: Sociómetro Vasco (microdatos), ponderado (wt). Cada punto es la media de quienes se ubican en cada escala (sin NS/NC): en horizontal, la autoubicación ideológica de 0 («extrema izquierda») a 10 («extrema derecha»); en vertical, el sentimiento nacionalista vasco o abertzale de 0 («nada») a 10 («muy nacionalista o abertzale»). Las líneas discontinuas marcan el 5, punto medio de las dos escalas, y dividen el gráfico en cuatro cuadrantes. "+
      "Votantes según su recuerdo de voto de la elección que pregunta cada oleada (autonómicas o Juntas Generales), así que la composición de cada grupo cambia de una oleada a otra. "+
      "El tamaño de cada círculo es proporcional (en área) al % de entrevistados que recuerda haber votado a ese partido (la cifra junto a su nombre; en pantallas pequeñas, en el tooltip y en la tabla). "+
      `Círculo vacío con borde discontinuo: menos de ${POCOS} votantes se ubican en alguna de las dos escalas, así que su posición puede moverse mucho por azar (en esta oleada: ${P.filter(d=>d.g!=="Total"&&!d.prev&&Math.min(d.ni,d.nn)<POCOS).map(d=>d.g+" "+Math.min(d.ni,d.nn)).join(", ")||"ninguno"}). No se muestra un partido si menos de 10 de sus votantes se ubican. Sumar solo tiene recuerdo de voto en las oleadas que preguntan por las autonómicas de 2024 (nov-24 a abr-26); en las posteriores se muestra su último dato disponible, marcado con su fecha y en círculo vacío. Sin junio de 2022 (no se preguntó el sentimiento nacionalista).`+
      (tray?" Al elegir un partido, el gráfico se acerca a su recorrido (cambia la escala de los ejes) y lo recorre oleada a oleada; con «Todos» vuelve a la vista completa. Con el recorrido: todos los círculos pasan a un mismo tamaño (sin el tamaño por recuerdo de voto) y, resaltados con sombra, marcan el final del recorrido de la oleada elegida; las líneas unen la posición de cada partido en las oleadas anteriores, hasta la elegida. Los saltos grandes de los partidos pequeños (Vox, Sumar, Elkarrekin Podemos desde 2024, PP) se deben sobre todo a que tienen pocos casos.":"");
    document.getElementById("cq-tabla").innerHTML=`<table><thead><tr><th>${labL(f)}</th><th>Recuerdo de voto (%)</th><th>Ideología (0-10)</th><th>Sentimiento nacionalista (0-10)</th><th>n ideología</th><th>n nacionalismo</th></tr></thead><tbody>${
      P.map(d=>`<tr><td>${d.g==="Total"?"Total Euskadi":d.g}${d.prev?" (dato de "+labL(d.prev)+")":""}</td><td>${d.rec!=null?nf(d.rec):"–"}</td><td>${nf(d.x,2)}</td><td>${nf(d.y,2)}</td><td>${d.ni.toLocaleString("es-ES")}</td><td>${d.nn.toLocaleString("es-ES")}</td></tr>`).join("")}</tbody></table>`;
  }
  let rz; window.addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(pinta,200);}); pinta();
})();

/* Histogramas de autoubicación de la última oleada (módulo común CIS y Sociómetro)
   1) histConjunto: % del total en cada punto + curva + marcas con la media de los votantes de cada partido
   2) histPartidos: un histograma por partido (recuerdo de voto) con su curva y su media */
function ihOscuro(hex){const n=parseInt(hex.slice(1),16),f=c=>Math.round(c*0.55).toString(16).padStart(2,"0");return "#"+f(n>>16)+f((n>>8)&255)+f(n&255);}
function ihNf(v,d=1){return v==null?"–":v.toLocaleString("es-ES",{minimumFractionDigits:d,maximumFractionDigits:d});}
function ihEtiq(C,x,mov){x=+x;return x===C.min?(mov?x+"\nIzq.":x+"\n"+C.izq):x===C.max?(mov?x+"\nDer.":x+"\n"+C.der):String(x);}

function histConjunto(C){
  const grid=document.getElementById(C.grid); const H=C.data; if(!grid||!H)return;
  const nf=ihNf, esMovil=()=>window.innerWidth<640, P=C.pre, PCOL=C.pcol, vals=C.vals;
  const card=document.createElement("div"); card.className="card";
  card.innerHTML=`<div class="card-head"><div><h3>Distribución de la autoubicación ideológica y posición de los votantes de cada partido</h3>
      <p class="subt">${C.subt}</p></div>
      <button class="export-btn" id="${P}export" data-chart="${P}ch" data-name="${C.exp}" hidden>⬇ PNG</button></div>
    <div class="chart tall" id="${P}ch"></div>
    <p class="foot-note">${C.nota}</p>
    <details class="tabla"><summary>Ver los datos en tabla</summary><div class="tabla-wrap" id="${P}tabla"></div></details>`;
  grid.appendChild(card);
  const ch=mkChart(P+"ch");
  function pinta(){
    if(!ch)return; const mov=esMovil();
    const marcas=[{nombre:"Total",media:H.total.media,color:SM.c.tinta},...H.partidos.map(p=>({nombre:p.nombre,media:p.media,color:PCOL[p.nombre]}))];
    /* nivel de cada marca: si queda cerca de otra del mismo nivel, baja un escalón para que no se pisen las etiquetas */
    {const sep=mov?1.6:1.0, ult=[]; [...marcas].sort((x,y)=>x.media-y.media).forEach(m=>{let n=0; while(ult[n]!=null&&m.media-ult[n]<sep)n++; m.nivel=n; ult[n]=m.media;});}
    const nmax=Math.max(...marcas.map(m=>m.nivel)), bruto=Math.max(...H.total.p)+5+nmax*(mov?21:5);
    const iv=bruto>30?10:5, ymax=Math.ceil(bruto/iv)*iv, paso=(ymax-Math.max(...H.total.p)-3)/(nmax+1);   // espacio arriba para las marcas, repartido en escalones
    const o=smBaseOption();
    o.grid={left:8,right:mov?10:20,top:mov?70:56,bottom:44,containLabel:true};
    o.tooltip={backgroundColor:"#fff",borderColor:SM.c.grid,borderWidth:1,textStyle:{color:SM.c.tinta,fontFamily:SM.sans,fontSize:12},extraCssText:"box-shadow:0 2px 8px rgba(0,0,0,.12);border-radius:3px",
      trigger:"item",formatter:q=>{if(q.seriesType!=="bar")return `<b>${q.name}</b>: media ${nf(q.value[0],2)}`;
        const k=vals[q.dataIndex];return `<div style="font-weight:600;margin-bottom:4px">Posición ${k}${k===C.min?" ("+C.izq.toLowerCase()+")":k===C.max?" ("+C.der.toLowerCase()+")":""}</div>Total: <b>${nf(q.value)} %</b>`+
          H.partidos.map(p=>`<div style="display:flex;gap:10px;justify-content:space-between"><span><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${PCOL[p.nombre]};margin-right:6px"></span>Votantes ${p.nombre}</span><b>${nf(p.p[q.dataIndex])} %</b></div>`).join("");}};
    o.xAxis=[{type:"category",data:vals.map(String),axisLine:{lineStyle:{color:SM.c.grid}},axisTick:{show:false},
        axisLabel:{color:SM.c.subtle,fontSize:11,interval:0,formatter:x=>ihEtiq(C,x,mov)}},
      {type:"value",min:C.min-0.5,max:C.max+0.5,show:false}];   /* eje oculto continuo, alineado con las barras */
    o.yAxis={type:"value",axisLine:{show:false},axisTick:{show:false},min:0,max:ymax,interval:iv,axisLabel:{color:SM.c.subtle,fontSize:11,formatter:v=>v>Math.ceil(Math.max(...H.total.p)/iv)*iv?"":v+" %"},splitLine:{lineStyle:{color:"#EEEBE3"}}};
    o.series=[{name:"Total",type:"bar",data:H.total.p,barWidth:"100%",barCategoryGap:"0%",itemStyle:{color:"#9FC3C5",borderColor:"#fff",borderWidth:1},
      label:{show:true,position:"top",distance:10,color:SM.c.tinta,fontSize:mov?10:11.5,formatter:q=>nf(q.value)},emphasis:{itemStyle:{color:"#6FA9AC"}}},
      {name:"Perfil",type:"line",xAxisIndex:1,data:H.total.p.map((v,i)=>[vals[i],v]),smooth:0.35,silent:true,z:4,showSymbol:true,symbol:"circle",symbolSize:5,
        lineStyle:{color:"#014550",width:2},itemStyle:{color:"#014550"},tooltip:{show:false}},   /* curva que une la parte superior de las columnas */
      {name:"Medias",type:"scatter",xAxisIndex:1,symbol:"pin",symbolSize:mov?20:30,symbolOffset:[0,"-45%"],z:5,
        label:{show:true,position:mov?"top":"right",distance:mov?10:2,fontWeight:600,fontSize:mov?10:12,lineHeight:12,formatter:q=>mov?`${q.data.corto}\n${nf(q.value[0],1)}`:`${q.data.corto} ${nf(q.value[0],1)}`},
        data:marcas.map((m,k)=>({name:m.nombre==="Total"?"Total (quienes se ubican)":`Votantes ${m.nombre}`,corto:m.nombre,value:[m.media,ymax-m.nivel*paso],
          itemStyle:{color:m.color},label:{color:m.nombre==="Total"?SM.c.tinta:m.color}})),
        markLine:{silent:true,symbol:"none",label:{show:false},data:marcas.map(m=>[{coord:[m.media,0],lineStyle:{color:m.color,type:"dashed",width:1.3}},{coord:[m.media,ymax]}])}}];
    o.graphic=[smLogoGraphic()];
    ch.setOption(o,true);
    document.getElementById(P+"tabla").innerHTML=`<table><thead><tr><th>Posición</th><th>Total (%)</th>${H.partidos.map(p=>`<th>Votantes ${p.nombre} (%)</th>`).join("")}</tr></thead><tbody>${
      vals.map((x,i)=>`<tr><td>${x}${x===C.min?" "+C.izq:x===C.max?" "+C.der:""}</td><td>${nf(H.total.p[i])}</td>${H.partidos.map(p=>`<td>${nf(p.p[i])}</td>`).join("")}</tr>`).join("")}
      ${H.total.nr.map((r,j)=>`<tr><td>${r.lab}</td><td>${nf(r.v)}</td>${H.partidos.map(p=>`<td>${nf(p.nr[j].v)}</td>`).join("")}</tr>`).join("")}
      <tr><td><b>Media (${C.min}-${C.max})</b></td><td><b>${nf(H.total.media,2)}</b></td>${H.partidos.map(p=>`<td><b>${nf(p.media,2)}</b></td>`).join("")}</tr></tbody></table>`;
  }
  let rz; window.addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(pinta,200);}); pinta();
}

function histPartidos(C){
  const grid=document.getElementById(C.grid); const H=C.data; if(!grid||!H)return;
  const nf=ihNf, esMovil=()=>window.innerWidth<640, P=C.pre, PCOL=C.pcol, vals=C.vals;
  const card=document.createElement("div"); card.className="card";
  card.innerHTML=`<div class="card-head"><div><h3>Autoubicación ideológica de los votantes de cada partido</h3>
      <p class="subt">${C.subt}</p></div></div>
    <div class="hist-grid">
      ${H.partidos.map((p,k)=>`<div><div style="display:flex;justify-content:space-between;align-items:baseline;gap:8px;margin:6px 0 0">
          <b style="color:${PCOL[p.nombre]};font-size:15px">${p.nombre}</b><span style="color:${SM.c.subtle};font-size:12px">media ${nf(p.media,1)} · ${p.n.toLocaleString("es-ES")} se ubican</span></div>
        <div class="chart" id="${P}ch-${k}" style="height:250px"></div></div>`).join("")}</div>
    <p class="foot-note">${C.nota}</p>
    <details class="tabla"><summary>Ver los datos en tabla</summary><div class="tabla-wrap" id="${P}tabla"></div></details>`;
  grid.appendChild(card);
  const charts=H.partidos.map((_,k)=>mkChart(`${P}ch-${k}`));
  const ymax=Math.ceil((Math.max(...H.partidos.flatMap(p=>p.p))+6)/10)*10;   // margen arriba para la etiqueta de la media
  function pinta(){
    const mov=esMovil();
    H.partidos.forEach((p,k)=>{const ch=charts[k]; if(!ch)return; const col=PCOL[p.nombre];
      const o=smBaseOption();
      o.grid={left:4,right:8,top:22,bottom:30,containLabel:true};
      o.tooltip={backgroundColor:"#fff",borderColor:SM.c.grid,borderWidth:1,textStyle:{color:SM.c.tinta,fontFamily:SM.sans,fontSize:12},trigger:"item",
        formatter:q=>q.seriesType==="bar"?`Votantes ${p.nombre} · posición ${vals[q.dataIndex]}: <b>${nf(q.value)} %</b>`:""};
      o.xAxis=[{type:"category",data:vals.map(String),axisLine:{lineStyle:{color:SM.c.grid}},axisTick:{show:false},
          axisLabel:{color:SM.c.subtle,fontSize:10.5,interval:0,formatter:x=>ihEtiq(C,x,true)}},
        {type:"value",min:C.min-0.5,max:C.max+0.5,show:false}];
      o.yAxis={type:"value",axisLine:{show:false},axisTick:{show:false},min:0,max:ymax,interval:10,axisLabel:{color:SM.c.subtle,fontSize:10.5,formatter:v=>v+" %"},splitLine:{lineStyle:{color:"#EEEBE3"}}};
      o.series=[{type:"bar",data:p.p,barWidth:"100%",barCategoryGap:"0%",itemStyle:{color:col,borderColor:"#fff",borderWidth:1},
          label:{show:true,position:"top",distance:9,color:SM.c.tinta,fontSize:mov?9.5:10.5,formatter:q=>q.value>=0.5?nf(q.value):""}},
        {type:"line",xAxisIndex:1,data:p.p.map((v,i)=>[vals[i],v]),smooth:0.35,silent:true,z:4,showSymbol:true,symbol:"circle",symbolSize:4,
          lineStyle:{color:ihOscuro(col),width:2},itemStyle:{color:ihOscuro(col)},tooltip:{show:false}},   /* curva que une la parte superior de las columnas */
        {type:"scatter",xAxisIndex:1,data:[[p.media,ymax]],symbolSize:0,silent:true,
          markLine:{silent:true,symbol:"none",lineStyle:{color:SM.c.tinta,type:"dashed",width:1.2},
            label:{show:true,position:"end",formatter:`media ${nf(p.media,1)}`,color:SM.c.tinta,fontSize:10.5},
            data:[[{coord:[p.media,0]},{coord:[p.media,ymax]}]]}},
        {type:"scatter",xAxisIndex:1,data:[[H.total.media,0]],symbolSize:0,silent:true,   /* referencia: media del total (línea más corta para que su etiqueta no pise la del partido) */
          markLine:{silent:true,symbol:"none",lineStyle:{color:"#8A877F",type:"dotted",width:1.4},
            label:{show:true,position:"end",formatter:`total ${nf(H.total.media,1)}`,color:"#6E6B64",fontSize:10},
            data:[[{coord:[H.total.media,0]},{coord:[H.total.media,ymax*0.8]}]]}}];
      o.graphic=[];
      ch.setOption(o,true); ch.resize();});
    document.getElementById(P+"tabla").innerHTML=`<table><thead><tr><th>Posición</th>${H.partidos.map(p=>`<th>Votantes ${p.nombre} (%)</th>`).join("")}</tr></thead><tbody>${
      vals.map((x,i)=>`<tr><td>${x}${x===C.min?" "+C.izq:x===C.max?" "+C.der:""}</td>${H.partidos.map(p=>`<td>${nf(p.p[i])}</td>`).join("")}</tr>`).join("")}
      ${H.partidos[0].nr.map((r,j)=>`<tr><td>${r.lab}</td>${H.partidos.map(p=>`<td>${nf(p.nr[j].v)}</td>`).join("")}</tr>`).join("")}
      <tr><td><b>Media (${C.min}-${C.max})</b></td>${H.partidos.map(p=>`<td><b>${nf(p.media,2)}</b></td>`).join("")}</tr>
      <tr><td>Personas que se ubican</td>${H.partidos.map(p=>`<td>${p.n.toLocaleString("es-ES")}</td>`).join("")}</tr></tbody></table>`;
  }
  let rz; window.addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(pinta,200);}); pinta();
}

/* CIS · histogramas del último barómetro */
(function(){
  const H=DATA.cis_ideo_hist; if(!H)return; const nf=ihNf;
  const PCOL={"PP":PARTY_COLORS["PP"],"PSOE":PARTY_COLORS["PSOE"],"VOX":PARTY_COLORS["VOX"],"Sumar":PARTY_COLORS["Sumar"]};
  const base={grid:"grid-cis-ideologia",data:H,pcol:PCOL,vals:[1,2,3,4,5,6,7,8,9,10],min:1,max:10,izq:"Izquierda",der:"Derecha"};
  histConjunto({...base,pre:"ihc-",exp:"cis_histograma_ideologia",
    subt:`% de entrevistados en cada punto de la escala de 1 (izquierda) a 10 (derecha) y media de los votantes de cada partido (recuerdo de voto, generales 2023) · ${labL(H.fecha)} (estudio ${H.estudio})`,
    nota:`Fuente: Barómetro del CIS (microdatos), «Escala de autoubicación ideológica (1-10)» (ESCIDEOL), ponderada. Barras: % sobre el total de entrevistados; no se ubican (N.S. ${nf(H.total.ns)} %, N.C. ${nf(H.total.nc)} %), por eso las barras no suman 100. Marcas de arriba: media de quienes se ubican; la del total es ${nf(H.total.media,2)} (${nf(H.total.media_ant,2)} en el barómetro anterior). Votantes según su recuerdo de voto en las generales de 2023: ${H.partidos.map(p=>`${p.nombre} ${p.n.toLocaleString("es-ES")}`).join(", ")} personas que se ubican. Al pasar el ratón por una barra se ve también qué % de los votantes de cada partido se sitúa en ese punto.`});
  histPartidos({...base,pre:"ih-",
    subt:`% de los votantes de cada partido (recuerdo de voto, generales 2023) en cada punto de la escala de 1 (izquierda) a 10 (derecha) · ${labL(H.fecha)} (estudio ${H.estudio})`,
    nota:`Fuente: Barómetro del CIS (microdatos), «Escala de autoubicación ideológica (1-10)» (ESCIDEOL), ponderada. Barras: % sobre todos los votantes de cada partido según su recuerdo de voto en las generales de 2023; quienes no se ubican (N.S./N.C.: ${H.partidos.map(p=>`${p.nombre} ${nf(p.ns+p.nc)} %`).join(", ")}) no tienen barra, por eso no suman 100. Línea discontinua: media de quienes se ubican; línea de puntos gris: media del total de entrevistados que se ubican (${nf(H.total.media,1)}), como referencia. Misma escala vertical en los cuatro gráficos para poder compararlos.`});
})();

/* Sociómetro · histogramas de la última oleada */
(function(){
  const H=DATA.soc_ideo_hist; if(!H)return; const nf=ihNf;
  const PCOL={"PNV":PARTY_COLORS["EAJ-PNV"],"EH Bildu":PARTY_COLORS["EH Bildu"],"PSE-EE":PARTY_COLORS["PSOE"],"PP":PARTY_COLORS["PP"]};
  const base={grid:"grid-soc-identidad",data:H,pcol:PCOL,vals:[0,1,2,3,4,5,6,7,8,9,10],min:0,max:10,izq:"Extrema izquierda",der:"Extrema derecha"};
  const pp=H.partidos.find(p=>p.nombre==="PP");
  histConjunto({...base,pre:"sihc-",exp:"sociometro_histograma_ideologia",
    subt:`% de entrevistados en cada punto de la escala de 0 (extrema izquierda) a 10 (extrema derecha) y media de los votantes de cada partido (recuerdo de voto, ${H.eleccion}) · ${labL(H.fecha)}`,
    nota:`Fuente: Sociómetro Vasco (microdatos), pregunta de autoubicación en la escala de 0 («extrema izquierda») a 10 («extrema derecha»), con el 5 como «centro», ponderada (wt). Barras: % sobre el total de entrevistados; no se ubican (NS/NC ${nf(H.total.nr[0].v)} %), por eso las barras no suman 100. Marcas de arriba: media de quienes se ubican; la del total es ${nf(H.total.media,2)} (${nf(H.total.media_ant,2)} en ${labL(H.total.fecha_ant)}). Votantes según su recuerdo de voto en las ${H.eleccion} (la elección que pregunta esta oleada): ${H.partidos.map(p=>`${p.nombre} ${p.n.toLocaleString("es-ES")}`).join(", ")} personas que se ubican; con solo ${pp?pp.n:"–"} votantes del PP, su distribución puede variar bastante por azar. No se muestran otros partidos (Elkarrekin Podemos, Sumar, Vox…) por tener muy pocos casos. Escala de 0 a 10 (la del CIS va de 1 a 10): no son comparables.`});
  histPartidos({...base,pre:"sih-",
    subt:`% de los votantes de cada partido (recuerdo de voto, ${H.eleccion}) en cada punto de la escala de 0 (extrema izquierda) a 10 (extrema derecha) · ${labL(H.fecha)}`,
    nota:`Fuente: Sociómetro Vasco (microdatos), autoubicación de 0 a 10, ponderada (wt). Barras: % sobre todos los votantes de cada partido según su recuerdo de voto en las ${H.eleccion}; quienes no se ubican (NS/NC: ${H.partidos.map(p=>`${p.nombre} ${nf(p.nr[0].v)} %`).join(", ")}) no tienen barra, por eso no suman 100. Línea discontinua: media de quienes se ubican; línea de puntos gris: media del total de entrevistados que se ubican (${nf(H.total.media,1)}), como referencia. Misma escala vertical en los cuatro gráficos para poder compararlos. El PP tiene solo ${pp?pp.n:"–"} votantes que se ubican: su histograma es orientativo.`});
})();

/* ===================== Sociómetro · Identidad subjetiva e independencia (última oleada) ===================== */
(function(){
  const grid=document.getElementById("grid-soc-identidad"); const S=DATA.soc_identidad; if(!grid||!S)return;
  const nf=(v,d=1)=>v==null?"–":v.toLocaleString("es-ES",{minimumFractionDigits:d,maximumFractionDigits:d});
  const esMovil=()=>window.innerWidth<640;
  const tt={backgroundColor:"#fff",borderColor:SM.c.grid,borderWidth:1,textStyle:{color:SM.c.tinta,fontFamily:SM.sans,fontSize:12},extraCssText:"box-shadow:0 2px 8px rgba(0,0,0,.12);border-radius:3px"};
  const par=document.createElement("div"); par.className="par-escalas"; grid.appendChild(par);
  const notaGrupos=v=>(v==="nacimiento"?"Lugar de nacimiento: Euskadi = Araba, Bizkaia o Gipuzkoa; no se muestran Navarra (unas 50 personas), Iparralde y NS/NC por tener muy pocos casos. ":"")+
    (v==="edad"?"El grupo de 18-24 años tiene unas 140 personas: sus porcentajes pueden variar varios puntos por azar. ":"");
  function tarjeta(id,titulo,subt){
    const card=document.createElement("div"); card.className="card";
    card.innerHTML=`<div class="card-head"><div><h3>${titulo}</h3><p class="subt">${subt}</p></div></div>
      <div class="ctrls"><label class="sel-lab">Cruzar por <select id="${id}-var" class="sel"></select></label></div>
      <div class="chart" id="${id}-ch"></div>
      <p class="foot-note" id="${id}-nota"></p>
      <details class="tabla"><summary>Ver los datos en tabla</summary><div class="tabla-wrap" id="${id}-tabla"></div></details>`;
    par.appendChild(card); return card;
  }
  function tabla(id,Q,v){
    const VV=Q.vars.find(x=>x.id===v), filas=(v==="total"?["Total"]:VV.grupos);
    document.getElementById(id+"-tabla").innerHTML=`<table><thead><tr><th>${v==="total"?"":VV.nombre} (%)</th>${Q.cats.map(c=>`<th>${c}</th>`).join("")}<th>n</th></tr></thead><tbody>${
      [...(v==="total"?[]:[["Total",Q.datos.total.Total]]),...filas.map(g=>[g,Q.datos[v][g]])].map(([g,D])=>`<tr><td>${g}</td>${D.p.map(x=>`<td>${nf(x)}</td>`).join("")}<td>${D.n.toLocaleString("es-ES")}</td></tr>`).join("")}</tbody></table>`;
  }

  /* 1 · Identidad subjetiva: barras horizontales apiladas al 100 % */
  (function(){
    const Q=S.preguntas.identidad, id="sidt";
    tarjeta(id,"Identidad subjetiva",`¿Cuál de las siguientes frases expresa mejor sus sentimientos? · % sobre el total de cada grupo · ${labL(S.fecha)}`);
    const COL=["#014550","#6FA9AC","#D9D2C3","#FBB089","#FF723C","#A9B4B2"], TXT=["#fff","#fff",SM.c.tinta,SM.c.tinta,"#fff",SM.c.tinta];
    const sel=document.getElementById(id+"-var"); sel.innerHTML=Q.vars.map(x=>`<option value="${x.id}">${x.nombre}</option>`).join("");
    const el=document.getElementById(id+"-ch"); const ch=mkChart(id+"-ch"); let v="total";
    sel.addEventListener("change",()=>{v=sel.value;pinta();});
    function pinta(){
      const mov=esMovil(), VV=Q.vars.find(x=>x.id===v);
      const filas=v==="total"?[["Total",Q.datos.total.Total]]:[["Total",Q.datos.total.Total],...VV.grupos.map(g=>[g,Q.datos[v][g]])];
      el.style.height=(110+filas.length*(mov?40:46))+"px"; if(ch)ch.resize(); if(!ch)return;
      const o=smBaseOption();
      o.grid={left:8,right:14,top:mov?78:58,bottom:24,containLabel:true};
      o.legend={top:0,left:0,right:0,itemWidth:12,itemHeight:10,textStyle:{color:SM.c.tinta,fontSize:mov?10.5:11.5},data:Q.cats};
      o.tooltip={...tt,trigger:"axis",axisPointer:{type:"shadow"},formatter:ps=>`<div style="font-weight:600;margin-bottom:4px">${ps[0].name}</div>`+
        ps.map(p=>`<div style="display:flex;gap:10px;justify-content:space-between"><span><span style="display:inline-block;width:9px;height:9px;background:${p.color};margin-right:6px"></span>${p.seriesName}</span><b>${nf(p.value)} %</b></div>`).join("")};
      o.yAxis={type:"category",inverse:true,data:filas.map(f=>f[0]),axisTick:{show:false},axisLine:{show:false},
        axisLabel:{color:SM.c.tinta,fontSize:mov?11:12,formatter:x=>x==="Total"?`{b|${x}}`:x,rich:{b:{fontWeight:700,color:SM.c.tinta}}}};
      o.xAxis={type:"value",min:0,max:100,interval:25,axisLabel:{color:SM.c.subtle,fontSize:10.5,formatter:x=>x+" %"},splitLine:{lineStyle:{color:"#EEEBE3"}}};
      o.series=Q.cats.map((c,k)=>({name:c,type:"bar",stack:"t",barWidth:mov?22:26,data:filas.map(f=>f[1].p[k]),itemStyle:{color:COL[k],borderColor:"#fff",borderWidth:1},
        label:{show:true,color:TXT[k],fontSize:mov?9.5:10.5,formatter:q=>q.value>=(mov?6:4)?nf(q.value,0):""}}));
      o.graphic=[smLogoGraphic()];
      ch.setOption(o,true);
      document.getElementById(id+"-nota").textContent="Fuente: Sociómetro Vasco (microdatos), pregunta «¿Cuál de las siguientes frases expresa mejor sus sentimientos? se siente…», ponderada (wt). % sobre el total de cada grupo, incluido NS/NC. "+
        notaGrupos(v)+(v!=="total"?"La barra de arriba es el total de Euskadi, como referencia. ":"")+`Última oleada (${labL(S.fecha)}). Las cifras dentro de las barras están redondeadas; el valor exacto, en el tooltip y en la tabla.`;
      tabla(id,Q,v);
    }
    let rz; window.addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(pinta,200);}); pinta();
  })();

  /* 2 · Postura sobre la independencia: semicírculos (uno por grupo) */
  (function(){
    const Q=S.preguntas.independencia, id="sind";
    tarjeta(id,"Postura sobre la independencia",`Sobre el tema de la independencia del País Vasco, Ud. personalmente… · % sobre el total de cada grupo · ${labL(S.fecha)}`);
    const COL={"De acuerdo":"#014550","Según las circunstancias":"#D9C9A3","En desacuerdo":"#FF723C","NS/NC":"#A9B4B2"}, TXT={"De acuerdo":"#fff","Según las circunstancias":SM.c.tinta,"En desacuerdo":"#fff","NS/NC":SM.c.tinta};
    const sel=document.getElementById(id+"-var"); sel.innerHTML=Q.vars.map(x=>`<option value="${x.id}">${x.nombre}</option>`).join("");
    const el=document.getElementById(id+"-ch"); const ch=mkChart(id+"-ch"); let v="total";
    sel.addEventListener("change",()=>{v=sel.value;pinta();});
    function pinta(){
      const mov=esMovil(), VV=Q.vars.find(x=>x.id===v);
      const grupos=v==="total"?[["Total",Q.datos.total.Total]]:VV.grupos.map(g=>[g,Q.datos[v][g]]);
      const W=el.clientWidth||600, cols=grupos.length===1?1:(W<520?2:3), filas=Math.ceil(grupos.length/cols);
      const top=mov?70:50, celdaW=W/cols, celdaH=grupos.length===1?Math.min(300,W*0.55):Math.min(190,celdaW*0.72);
      el.style.height=(top+filas*celdaH+16)+"px"; if(ch)ch.resize(); if(!ch)return;
      const o=smBaseOption();
      o.legend={top:0,left:0,right:0,itemWidth:12,itemHeight:10,textStyle:{color:SM.c.tinta,fontSize:mov?10.5:11.5},data:Q.cats};
      o.tooltip={...tt,trigger:"item",formatter:q=>`<div style="font-weight:600;margin-bottom:4px">${q.seriesName}</div>${q.name}: <b>${nf(q.value)} %</b>`};
      const R=Math.min(celdaW*0.42,celdaH*0.70);
      o.series=grupos.map(([g,D],k)=>{const c=k%cols, f=Math.floor(k/cols), cx=celdaW*(c+0.5), cy=top+celdaH*f+celdaH*0.76;
        return {name:g,type:"pie",startAngle:180,endAngle:360,center:[cx,cy],radius:[R*0.52,R],avoidLabelOverlap:false,silent:false,
          itemStyle:{borderColor:"#fff",borderWidth:1.5},
          label:{show:true,position:"inside",fontSize:grupos.length===1?13:10.5,fontWeight:600,formatter:q=>q.value>=(grupos.length===1?4:7)?nf(q.value,0):"",color:"#fff"},
          data:Q.cats.map((cat,i)=>({name:cat,value:D.p[i],itemStyle:{color:COL[cat]},label:{color:TXT[cat]}}))};});
      /* nombre del grupo centrado debajo de cada semicírculo */
      o.graphic=[...grupos.map(([g,D],k)=>{const c=k%cols, f=Math.floor(k/cols), cx=celdaW*(c+0.5), cy=top+celdaH*f+celdaH*0.76;
        return {type:"text",x:cx,y:cy+6,silent:true,style:{text:g,textAlign:"center",textVerticalAlign:"top",fill:SM.c.tinta,font:`600 ${grupos.length===1?15:12}px ${SM.sans}`}};}),smLogoGraphic()];
      ch.setOption(o,true);
      document.getElementById(id+"-nota").textContent="Fuente: Sociómetro Vasco (microdatos), pregunta «Sobre el tema de la independencia del País Vasco, Ud. personalmente…»: está de acuerdo, estaría o no de acuerdo según las circunstancias, está en desacuerdo; ponderada (wt). % sobre el total de cada grupo, incluido NS/NC; cada semicírculo suma 100. "+
        notaGrupos(v)+(v!=="total"?`Total de Euskadi: de acuerdo ${nf(Q.datos.total.Total.p[0])} %, según las circunstancias ${nf(Q.datos.total.Total.p[1])} %, en desacuerdo ${nf(Q.datos.total.Total.p[2])} %. `:"")+`Última oleada (${labL(S.fecha)}).`;
      tabla(id,Q,v);
    }
    let rz; window.addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(pinta,200);}); pinta();
    /* la pestaña puede estar oculta al cargar (ancho 0): se recoloca cuando cambia el ancho real */
    if(window.ResizeObserver){let w0=el.clientWidth; new ResizeObserver(()=>{const w=el.clientWidth; if(w&&Math.abs(w-w0)>4){w0=w;clearTimeout(rz);rz=setTimeout(pinta,60);}}).observe(el);}
  })();
})();

/* ===================== CIS · Situación económica: España frente a la personal ===================== */
(function(){
  const grid=document.getElementById("grid-cis-economia"); const E=DATA.cis_economia; if(!grid||!E)return;
  grid.innerHTML="";
  const MES3=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
  const xl=f=>`${MES3[+f.slice(5)-1]} ${f.slice(2,4)}`;
  const nf=(v,d=1)=>v==null?"–":v.toLocaleString("es-ES",{minimumFractionDigits:d,maximumFractionDigits:d});
  const sg=v=>(v>0?"+":"")+nf(v);
  const tt={backgroundColor:"#fff",borderColor:SM.c.grid,borderWidth:1,textStyle:{color:SM.c.tinta,fontFamily:SM.sans,fontSize:12},extraCssText:"box-shadow:0 2px 8px rgba(0,0,0,.12);border-radius:3px"};
  const esMovil=()=>window.innerWidth<640;
  const AC={"España":"#014550","Personal":"#FF723C"};
  const last=E.fechas.length-1;

  /* (La evolución España/personal se quitó a petición de Mikel, 01/10/2026; los datos siguen en DATA.cis_economia.series) */

  /* 2 · Último barómetro: reparto completo de las dos valoraciones */
  (function(){
    const card=document.createElement("div"); card.className="card";
    card.innerHTML=`<div class="card-head"><div><h3>Situación económica en el último barómetro</h3>
        <p class="subt">% de entrevistados en cada respuesta · ${labL(E.fechas[last])} (estudio ${E.estudios[last]})</p></div></div>
      <div class="chart" id="ecu-ch" style="height:230px"></div>
      <p class="foot-note">Fuente: Barómetro del CIS (microdatos), ECOESP y ECOPER, ponderadas. % sobre el total de entrevistados; cada barra suma 100. Al pasar el ratón se ve también el dato del barómetro anterior (${labL(E.fechas[last-1])}).</p>
      <details class="tabla"><summary>Ver los datos en tabla</summary><div class="tabla-wrap" id="ecu-tabla"></div></details>`;
    grid.appendChild(card);
    const ch=mkChart("ecu-ch");
    const COL=["#014550","#6FA9AC","#D9D2C3","#FBB089","#FF723C","#A9B4B2","#C9CFCE"], TXT=["#fff","#fff",SM.c.tinta,SM.c.tinta,"#fff",SM.c.tinta,SM.c.tinta];
    const filas=[["Situación de España","España"],["Situación personal","Personal"]];
    function pinta(){
      if(!ch)return; const mov=esMovil();
      const o=smBaseOption();
      o.grid={left:8,right:14,top:mov?54:34,bottom:24,containLabel:true};
      o.legend={top:0,left:0,right:0,itemWidth:12,itemHeight:10,textStyle:{color:SM.c.tinta,fontSize:mov?10.5:11.5},data:E.cats};
      o.tooltip={...tt,trigger:"axis",axisPointer:{type:"shadow"},formatter:ps=>{const a=filas[ps[0].dataIndex][1];return `<div style="font-weight:600;margin-bottom:4px">${ps[0].name}</div>`+
        ps.map(p=>{const k=E.cats.indexOf(p.seriesName), d=E.ultimo[a][k]-E.anterior[a][k];return `<div style="display:flex;gap:10px;justify-content:space-between"><span><span style="display:inline-block;width:9px;height:9px;background:${p.color};margin-right:6px"></span>${p.seriesName}</span><b>${nf(p.value)} %</b><span style="color:${SM.c.subtle}">${sg(d)}</span></div>`;}).join("");}};
      o.yAxis={type:"category",inverse:true,data:filas.map(f=>f[0]),axisTick:{show:false},axisLine:{show:false},axisLabel:{color:SM.c.tinta,fontSize:mov?11:12,width:mov?70:140,overflow:"break"}};
      o.xAxis={type:"value",min:0,max:100,interval:25,axisLabel:{color:SM.c.subtle,fontSize:10.5,formatter:x=>x+" %"},splitLine:{lineStyle:{color:"#EEEBE3"}}};
      o.series=E.cats.map((c,k)=>({name:c,type:"bar",stack:"t",barWidth:mov?26:32,data:filas.map(f=>E.ultimo[f[1]][k]),itemStyle:{color:COL[k],borderColor:"#fff",borderWidth:1},
        label:{show:true,color:TXT[k],fontSize:mov?9.5:11,formatter:q=>q.value>=(mov?6:3.5)?nf(q.value,0):""}}));
      ch.setOption(o,true);
      document.getElementById("ecu-tabla").innerHTML=`<table><thead><tr><th>Respuesta (%)</th><th>España</th><th>España, barómetro anterior</th><th>Personal</th><th>Personal, barómetro anterior</th></tr></thead><tbody>${
        E.cats.map((c,k)=>`<tr><td>${c}</td><td>${nf(E.ultimo["España"][k])}</td><td>${nf(E.anterior["España"][k])}</td><td>${nf(E.ultimo["Personal"][k])}</td><td>${nf(E.anterior["Personal"][k])}</td></tr>`).join("")}</tbody></table>`;
    }
    let rz; window.addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(pinta,200);}); pinta();
  })();
})();

/* ===================== Evolución encuestas: promedio de encuestas ===================== */
/* Lee window.PROMEDIO (promedio.json, lo genera R/promedio.R en GitHub Actions). Si no existe, no se dibuja nada. */
(function(){
  const P=window.PROMEDIO, grid=document.getElementById("grid-enc"); if(!grid)return;
  if(!P||!P.tendencia){grid.innerHTML=`<div class="empty"><span class="k">Sin datos</span><p>El promedio de encuestas no está disponible en este momento.</p></div>`;return;}
  const card=document.createElement("div"); card.className="card";
  card.innerHTML=`
      <div class="card-head"><div><h3>Evolución de estimación de voto</h3><p class="subt">Líneas de tendencia y encuestas publicadas (puntos)</p></div>
        <button class="export-btn" data-chart="pr-ch" data-name="promedio_encuestas">⬇ PNG</button></div>
      <div class="ctrls"><div class="seg" id="pr-periodo" role="group" aria-label="Periodo">
        <button type="button" data-v="todo" aria-pressed="true">Todo</button>
        <button type="button" data-v="12" aria-pressed="false">Último año</button>
        <button type="button" data-v="6" aria-pressed="false">Últimos 6 meses</button></div></div>
      <div class="chips" id="pr-chips"></div>
      <div class="chart tall" id="pr-ch"></div>
      <p class="foot-note" id="pr-nota"></p>`;
  grid.appendChild(card);

  const PARTS=P.partidos, IDS=PARTS.map(p=>p.id), T=P.tendencia, S=P.sondeos;
  const nf=v=>v==null?"–":v.toLocaleString("es-ES",{minimumFractionDigits:1,maximumFractionDigits:1});
  const MES3=["ene.","feb.","mar.","abr.","may.","jun.","jul.","ago.","sep.","oct.","nov.","dic."];
  const fLarga=f=>{const [y,m,d]=f.split("-");return `${+d} de ${MESL[+m-1]} de ${y}`;};
  const fCorta=f=>{const [y,m]=f.split("-");return `${MES3[+m-1]} ${y}`;};
  const iso=t=>{const d=new Date(t);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;};  // fecha local (no UTC)
  const idxDia={}; T.fechas.forEach((f,i)=>idxDia[f]=i);
  const ch=mkChart("pr-ch"), esMovil=()=>window.innerWidth<640;
  if(!ch)return;
  let sel=[...IDS], periodo="todo";
  // Posición del ratón en píxeles: el tooltip busca si hay un sondeo (punto) justo debajo
  let raton=null; ch.getZr().on("mousemove",e=>{raton=[e.offsetX,e.offsetY];}); ch.getZr().on("globalout",()=>{raton=null;});
  function sondeoBajo(partes,f){
    if(!raton)return null; const t0=new Date(f).getTime(); let mejor=null, dmin=5;
    // si el ratón está más cerca de una línea de tendencia que de cualquier punto, manda la línea
    const k=idxDia[f]; if(k!=null)for(const q of partes){const v=T[q.id][k]; if(v==null)continue;
      const d=Math.abs(ch.convertToPixel({gridIndex:0},[f,v])[1]-raton[1]); if(d<dmin)dmin=d;}
    for(let i=0;i<S.fecha.length;i++){ if(Math.abs(new Date(S.fecha[i]).getTime()-t0)>20*864e5)continue;
      for(const q of partes){const v=S[q.id][i]; if(v==null)continue;
        const px=ch.convertToPixel({gridIndex:0},[S.fecha[i],v]); const d=Math.hypot(px[0]-raton[0],px[1]-raton[1]);
        if(d<dmin){dmin=d;mejor={i,q,v};}}}
    return mejor;
  }
  const tt={backgroundColor:"#fff",borderColor:SM.c.grid,borderWidth:1,textStyle:{color:SM.c.tinta,fontFamily:SM.sans,fontSize:12},extraCssText:"box-shadow:0 2px 8px rgba(0,0,0,.12);border-radius:3px"};
  const sw=c=>`<span style="display:inline-block;width:10px;height:3px;border-radius:2px;background:${c};margin-right:6px;vertical-align:middle"></span>`;

  function chips(){
    const el=document.getElementById("pr-chips"), resto=IDS.filter(g=>!sel.includes(g));
    const col=id=>PARTS.find(p=>p.id===id).color, nom=id=>PARTS.find(p=>p.id===id).nombre;
    el.innerHTML=sel.map(g=>`<span class="chip"><span class="sw" style="background:${col(g)}"></span><span class="nm">${nom(g)}</span><button type="button" data-q="${g}" aria-label="Quitar ${nom(g)}">×</button></span>`).join("")
      +(resto.length?`<select class="add-sel" aria-label="Añadir"><option value="">+ Añadir…</option>${resto.map(g=>`<option value="${g}">${nom(g)} (${nf(P.ultimo[g])} %)</option>`).join("")}</select>`:"")
      +`<button type="button" class="link-btn">Restablecer</button>`;
    el.querySelectorAll(".chip button").forEach(x=>x.addEventListener("click",()=>{sel=sel.filter(g=>g!==x.dataset.q);pinta();}));
    const a=el.querySelector("select"); if(a)a.addEventListener("change",()=>{if(a.value){sel.push(a.value);sel.sort((x,y)=>IDS.indexOf(x)-IDS.indexOf(y));pinta();}});
    el.querySelector(".link-btn").addEventListener("click",()=>{sel=[...IDS];pinta();});
  }
  document.querySelectorAll("#pr-periodo button").forEach(b=>b.addEventListener("click",()=>{
    periodo=b.dataset.v; document.querySelectorAll("#pr-periodo button").forEach(x=>x.setAttribute("aria-pressed",x===b)); pinta();}));

  function inicio(){
    if(periodo==="todo")return P.desde;
    const d=new Date(P.hasta+"T00:00:00"); d.setMonth(d.getMonth()-(+periodo));
    return iso(d);
  }
  function pinta(){
    const mov=esMovil(), x0=inicio();
    chips();
    const partes=PARTS.filter(p=>sel.includes(p.id));
    // máximo del eje: múltiplo de 10 por encima del máximo de los puntos visibles
    let vmax=0; partes.forEach(p=>S[p.id].forEach((v,i)=>{if(v!=null&&S.fecha[i]>=x0&&v>vmax)vmax=v;}));
    const yMax=Math.max(10,Math.ceil((vmax-1)/10)*10);   // un sondeo que pase la línea por menos de 1 punto no sube el eje
    const o=smBaseOption();
    o.grid={left:8,right:mov?58:82,top:16,bottom:30,containLabel:true};
    // Tooltip por eje (tendencia del día bajo el ratón); si el ratón está sobre un punto, muestra ese sondeo
    o.tooltip={...tt,trigger:"axis",confine:true,axisPointer:{type:"line",lineStyle:{color:SM.c.subtle,width:1}},formatter:ps=>{
      let f=iso(ps[0].axisValue);
      const pt=sondeoBajo(partes,f);
      if(pt){const i=pt.i;
        return `<div style="font-weight:600;margin-bottom:4px">${S.empresa[i]}${S.medio[i]?" / "+S.medio[i]:""}</div>${fLarga(S.fecha[i])}`+
          `${S.muestra[i]?" · N="+S.muestra[i].toLocaleString("es-ES"):""}<div style="margin-top:4px">${sw(pt.q.color)}${pt.q.nombre} <b>${nf(pt.v)} %</b></div>`;}
      if(f<P.desde)f=P.desde; if(f>P.hasta)f=P.hasta; const i=idxDia[f]; if(i==null)return "";
      const rows=partes.map(q=>({q,v:T[q.id][i]})).filter(r=>r.v!=null).sort((a,b)=>b.v-a.v)
        .map(r=>`<div style="display:flex;gap:10px;justify-content:space-between"><span>${sw(r.q.color)}${r.q.nombre}</span><b>${nf(r.v)} %</b></div>`).join("");
      return `<div style="font-weight:600;margin-bottom:4px">${fLarga(f)} · tendencia</div>${rows}`;}};
    o.xAxis={type:"time",min:x0,max:P.hasta,axisLine:{lineStyle:{color:SM.c.grid}},axisTick:{show:false},splitLine:{show:false},
      minInterval:periodo==="todo"?365*864e5:0,
      axisLabel:{color:SM.c.subtle,fontSize:11,hideOverlap:true,formatter:periodo==="todo"?"{yyyy}":(v=>fCorta(iso(v)))}};
    o.yAxis={type:"value",min:0,max:yMax,interval:10,axisLabel:{color:SM.c.subtle,fontSize:11,formatter:v=>v===yMax?nf(v)+" %":nf(v)},
      splitLine:{lineStyle:{color:"#EEEBE3"}}};
    o.series=partes.flatMap(p=>[
      {type:"scatter",name:p.nombre,z:2,symbolSize:mov?3:4.5,itemStyle:{color:p.color,opacity:.4},emphasis:{disabled:true},
        data:S.fecha.map((f,i)=>S[p.id][i]==null||f<x0?null:[f,S[p.id][i],i]).filter(Boolean)},
      {type:"line",name:p.nombre,z:3,showSymbol:false,smooth:.3,connectNulls:false,
        lineStyle:{width:3,color:p.color},itemStyle:{color:p.color},emphasis:{disabled:true},
        data:T.fechas.map((f,i)=>f<x0?null:[f,T[p.id][i]]).filter(Boolean),
        endLabel:{show:true,color:p.color,fontWeight:600,fontSize:mov?10:12,lineHeight:mov?12:14,distance:6,
          formatter:()=>`{b|${p.nombre}}\n${nf(P.ultimo[p.id])} %`,rich:{b:{fontWeight:700,color:p.color,fontSize:mov?10:12}}},
        labelLayout:{moveOverlap:"shiftY"}}
    ]);
    ch.setOption(o,true);
    document.getElementById("pr-nota").innerHTML=`Tendencia: media ponderada por antigüedad y tamaño de la muestra. `+
      `Fuente: <a href="${P.fuente.url}" target="_blank" rel="noopener">Wikipedia</a> (${P.fuente.licencia}), ${P.n_sondeos.toLocaleString("es-ES")} sondeos (${fCorta(P.desde)} – ${fCorta(P.hasta)}). `+
      `Actualizado el ${fLarga(P.actualizado.slice(0,10))}.`;
    const h=mov?360:440; if(ch.getHeight()!==h){document.getElementById("pr-ch").style.height=h+"px";ch.resize();}
  }
  let rz; window.addEventListener("resize",()=>{clearTimeout(rz);rz=setTimeout(pinta,200);});
  pinta();
})();

/* En la web propia la descarga PNG funciona siempre (enlace <a download>): mostrar los botones */
document.querySelectorAll(".export-btn[hidden]").forEach(b=>b.hidden=false);
