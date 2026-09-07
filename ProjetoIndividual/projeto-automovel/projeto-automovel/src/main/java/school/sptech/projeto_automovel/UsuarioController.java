package school.sptech.projeto_automovel;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Usuarios")
public class UsuarioController {
    private final JdbcTemplate template;

    public UsuarioController(JdbcTemplate template) {
        this.template = template;
    }
}
