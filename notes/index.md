# 微服务速成笔记

本文档是我在学习后端开发过程中的一些笔记，主要是一些基础知识和一些常用的技术栈的使用方法。本文档只作为了解和入门使用。

包括三部分，Spring Cloud 微服务技术，Spring 进阶内容，k8s 微服务技术。

- Spring Cloud 微服务技术部分，讲解 Spring Cloud 微服务的实现。主要包括 Consul 作为服务注册中心和配置中心，LoadBalancer 进行负载均衡，Http Interface Client 与 OpenFeign 处理服务之间的调用，Resilience4j 服务熔断和限流，Micrometer 监控，Spring Gateway 网关，Seata 分布式事务。
- Spring 进阶内容部分，讲解 Spring 的一些高级内容，以及一些后端开发的进阶内容在 Spring 中的实现。前者主要包括 Reactor 框架，Spring WebFlux，Spring Security，Spring Security OAuth2 认证以及 KeyCloak 用户服务。后者主要包括 Rabbit MQ 消息队列，GraphQL，gRPC。
- k8s 微服务技术部分，讲解基于 k8s 的微服务实现，以及 Spring Cloud Kubernetes 的基础。

最后是一些补充内容，包括 Nacos， Sentinel，kafka 高性能消息队列，Redis，OTel-LGTM，Dubbo RPC，Nginx，Treafik，Citus。

本文假设你已经会使用 docker 和 docker-compose，并能基于 Spring Boot 进行简单 REST 应用开发。

## Spring Cloud 微服务技术

- [回到 Spring](notes/01.md)
- [回到 Java](notes/02.md)
- [Consul 作为服务注册中心](notes/03.md)
- [Consul 作为配置中心](notes/04.md)
- [LoadBalancer](notes/05.md)
- [Http Interface Client 与 OpenFeign](notes/06.md)
- [Resilience4j 服务熔断和降级](notes/07.md)
- [Resilience4j 限流](notes/08.md)
- [Micrometer 监控](notes/09.md)
- [Spring Gateway 网关](notes/10.md)
- [Seata 分布式事务](notes/11.md)

## Spring 进阶内容

- [Reactor 框架](notes/12.md)
- [Spring WebFlux](notes/13.md)
- [Spring Security](notes/14.md)
- [Spring Security OAuth2 认证以及 KeyCloak 用户服务](notes/15.md)

以下内容以 Spring 与 Java 为基础讲解，但本身都是多语言支持。

- [Rabbit MQ 消息队列](notes/16.md)
- [GraphQL](notes/17.md)
- [gRPC](notes/18.md)

## k8s 微服务技术

- [后端框架一览](notes/19.md)
- [k8s 无状态服务基本部署](notes/20.md)
- [helm 打包 istio 网关与 k8s 命令行工具](notes/21.md)
- [k8s 无状态服务](notes/22.md)
- [k8s 有状态服务](notes/23.md)
- [服务网格](notes/24.md)

## 中间件补充

- [Nacos 服务治理](notes/25.md)
- [Sentinel](notes/26.md)
- [kafka 高性能消息队列](notes/27.md)
- [Redis](notes/28.md)
- [OTel-LGTM](notes/29.md)
- [Dubbo RPC](notes/30.md)
- [Nginx](notes/31.md)
- [Treafik](notes/32.md)
- [Citus](notes/33.md)
