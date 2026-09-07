package school.sptech.projeto_automovel;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Automoveis")
@CrossOrigin(origins = "http://localhost:5173")
public class AutomovelController {

    private final JdbcTemplate template;

    public AutomovelController(JdbcTemplate template) {
        this.template = template;
    }

    @PostMapping
    public ResponseEntity<?> cadastrar(@RequestBody Automovel automovel) {

        if (automovel.getNomeAutomovel() == null ||
                automovel.getNomeAutomovel().isBlank()) {

            return ResponseEntity.status(400)
                    .body("Nome do automóvel é obrigatório.");
        }

        if (automovel.getMarcaAutomovel() == null ||
                automovel.getMarcaAutomovel().isBlank()) {

            return ResponseEntity.status(400)
                    .body("Marca do automóvel é obrigatória.");
        }

        if (automovel.getAnoAutomovel() == null ||
                automovel.getAnoAutomovel() < 1886) {

            return ResponseEntity.status(400)
                    .body("Ano do automóvel é inválido.");
        }

        if (automovel.getPlacaAutomovel() == null ||
                automovel.getPlacaAutomovel().isBlank()) {

            return ResponseEntity.status(400)
                    .body("Placa é obrigatória.");
        }

        if (automovel.getTipoAutomovel() == null ||
                automovel.getTipoAutomovel().isBlank()) {

            return ResponseEntity.status(400)
                    .body("Tipo do automóvel é obrigatório.");
        }

        String sql = """
                INSERT INTO automovel
                (nomeAutomovel, marcaAutomovel, anoAutomovel, placaAutomovel, tipoAutomovel)
                VALUES (?, ?, ?, ?, ?)
                """;

        template.update(
                sql,
                automovel.getNomeAutomovel(),
                automovel.getMarcaAutomovel(),
                automovel.getAnoAutomovel(),
                automovel.getPlacaAutomovel(),
                automovel.getTipoAutomovel()
        );

        return ResponseEntity.status(201).body(automovel);
    }


    @GetMapping
    public ResponseEntity<List<Automovel>> listar() {

        String sql = """
                SELECT idAutomovel,
                       nomeAutomovel,
                       marcaAutomovel,
                       anoAutomovel,
                       placaAutomovel,
                       tipoAutomovel
                FROM automovel
                """;

        List<Automovel> resultado =
                template.query(
                        sql,
                        new BeanPropertyRowMapper<>(Automovel.class)
                );

        if (resultado.isEmpty()) {
            return ResponseEntity.status(204).build();
        }

        return ResponseEntity.status(200).body(resultado);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Automovel> buscarPorId(
            @PathVariable Integer id) {

        String sql = """
                SELECT idAutomovel,
                       nomeAutomovel,
                       marcaAutomovel,
                       anoAutomovel,
                       placaAutomovel,
                       tipoAutomovel
                FROM automovel
                WHERE idAutomovel = ?
                """;

        List<Automovel> resultado =
                template.query(
                        sql,
                        new BeanPropertyRowMapper<>(Automovel.class),
                        id
                );

        if (resultado.isEmpty()) {
            return ResponseEntity.status(404).build();
        }

        return ResponseEntity.status(200).body(resultado.get(0));
    }
}