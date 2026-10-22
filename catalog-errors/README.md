# catalog-errors

Backstage에 등록하면 일부러 오류가 나는 `catalog-info.yaml` 세 개입니다(강의 2-2의 "검증 오류 읽기" 연습용).
실제 서비스 등록에는 저장소 맨 위의 `catalog-info.yaml`만 씁니다.

- `missing-owner.yaml` — `owner`가 없음
- `bad-name.yaml` — `metadata.name`에 공백과 대문자
- `bad-indent.yaml` — `spec` 아래 들여쓰기가 어긋남
