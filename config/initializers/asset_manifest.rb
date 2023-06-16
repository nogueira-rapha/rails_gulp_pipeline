rev_manifest_path = 'public/assets/rev-manifest.json'

raise StandardError.new "Arquivo rev-manifest.json não definido" unless File.exist?(rev_manifest_path)
REV_MANIFEST = JSON.parse(File.read(rev_manifest_path))
