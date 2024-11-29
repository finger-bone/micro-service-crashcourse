package io.github.fingerbone;

import org.springframework.amqp.core.AmqpAdmin;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.connection.CachingConnectionFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitAdmin;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfig {

    @Bean
    public ConnectionFactory connectionFactory() {
        var factory = new CachingConnectionFactory();
        factory.setHost("localhost");
        factory.setUsername("user");
        factory.setPassword("password");
        factory.setVirtualHost("/");
        return factory;
    }

    @Bean
    public AmqpAdmin amqpAdmin() {
        return new RabbitAdmin(connectionFactory());
    }

    @Bean
    public AmqpTemplate amqpTemplate() {
        return new RabbitTemplate(connectionFactory());
    }

    @Bean
    public Queue queue() {
        return new Queue("food");
    }

    @Bean("trash")
    public Queue trashQueue() {
        return new Queue("trash");
    }

    @Bean
    public FanoutExchange exchange() {
        return new FanoutExchange("fanout");
    }

    @Bean
    public DirectExchange directExchange() {
        return new DirectExchange("direct");
    }

    @Bean
    Binding foodBinding() {
        return BindingBuilder.bind(queue()).to(exchange());
    }

    @Bean
    Binding trashBinding() {
        return BindingBuilder.bind(trashQueue()).to(exchange());
    }
}
