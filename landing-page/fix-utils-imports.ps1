$files = Get-ChildItem -Path "src\components\ui" -Filter "*.tsx" -Recurse
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $newContent = $content -replace 'from "@/lib/utils"', 'from "../../lib/utils"'
    if ($content -ne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent
        Write-Host "Updated imports in $($file.Name)"
    }
}
