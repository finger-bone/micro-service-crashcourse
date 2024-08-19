# 后端速成笔记

本文档是我在学习后端开发过程中的一些笔记，主要是一些基础知识和一些常用的技术栈的使用方法。本文档只作为了解和入门使用。

包括三部分，Spring Cloud 微服务技术，Spring 进阶内容，k8s 微服务技术。

- Spring Cloud 微服务技术部分，讲解 Spring Cloud 微服务的实现。主要包括 Consul 作为服务注册中心和配置中心，LoadBalancer 进行负载均衡，Http Interface Client 与 OpenFeign 处理服务之间的调用，Resilience4j 服务熔断和限流，Micrometer 监控，Spring Gateway 网关，Seata 分布式事务。
- Spring 进阶内容部分，讲解 Spring 的一些高级内容，以及一些后端开发的进阶内容在 Spring 中的实现。前者主要包括 Reactor 框架，Spring WebFlux，Spring Security，Spring Security OAuth2 认证以及 KeyCloak 用户服务。后者主要包括 Rabbit MQ 消息队列，GraphQL，gRPC。
- k8s 微服务技术部分，讲解基于 k8s 的微服务实现，以及 Spring Cloud Kubernetes 的基础。

本文假设你已经会使用 docker 和 docker-compose，并能基于 Spring Boot 进行简单 REST 应用开发。

仍在更新中……

## Spring Cloud 微服务技术

- [回到 Spring](1.md)
- [回到 Java](2.md)
- [Consul 作为服务注册中心](3.md)
- [Consul 作为配置中心](4.md)
- [LoadBalancer](5.md)
- [Http Interface Client 与 OpenFeign](6.md)
- [Resilience4j 服务熔断和降级](7.md)
- [Resilience4j 限流](8.md)
- [Micrometer 监控](9.md)
- [Spring Gateway 网关](10.md)
- [Seata 分布式事务](11.md)

## Spring 进阶内容

- [Reactor 框架](12.md)
- [Spring WebFlux](13.md)
- [Spring Security](14.md)
- [Spring Security OAuth2 认证以及 KeyCloak 用户服务](15.md)

以下内容以 Spring 与 Java 为编程语言讲解，但本身都是多语言支持。

- [Rabbit MQ 消息队列](16.md)
- [GraphQL](17.md)
- [gRPC](18.md)

## k8s 微服务技术

- [其它语言后端框架与后端开发](19.md)

待续。