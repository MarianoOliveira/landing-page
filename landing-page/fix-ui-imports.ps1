$files = Get-ChildItem -Path "src" -Filter "*.tsx" -Recurse
$files += Get-ChildItem -Path "src" -Filter "*.ts" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $newContent = $content
    
    # Se o arquivo está em src/components/ui, use importação relativa (./)
    if ($file.FullName -like "*\src\components\ui\*") {
        $newContent = $newContent -replace 'from "@/components/ui/([^"]+)"', 'from "./$1"'
    }
    # Se o arquivo está em src/hooks, use importação relativa (../components/ui)
    elseif ($file.FullName -like "*\src\hooks\*") {
        $newContent = $newContent -replace 'from "@/components/ui/([^"]+)"', 'from "../components/ui/$1"'
    }
    
    if ($content -ne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent
        Write-Host "Updated imports in $($file.Name)"
    }
}
