package pet.project.resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tests")
public class TestResource {

    @GetMapping
    public String getTestText() {
        return "Hello World!";
    }

}
