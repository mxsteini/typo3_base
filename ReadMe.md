# Bootstrapping

```bash
pod.sh console 7.2 TYPO3_CONTEXT=Development/Podman composer install
```

# Setup typo3
```bash
pod.sh console 7.2 TYPO3_CONTEXT=Development/Podman vendor/bin/typo3cms install:setup \
    --force \
    --database-host-name=127.0.0.1 \
    --database-name=MS_BASE \
    --database-user-name=root \
    --database-user-password=root \
    --admin-user-name=1234qwer \
    --admin-password=1234qwer \
    --site-name="ms-base" \
    --use-existing-database \
    --no-interaction

pod.sh console 7.2 TYPO3_CONTEXT=Development/Podman vendor/bin/typo3cms install:fixfolderstructure
pod.sh console 7.2 TYPO3_CONTEXT=Development/Podman vendor/bin/typo3cms install:generatepackagestates

```

# Setup Extension
```bash
cd src/Resource/Private
npm i
```