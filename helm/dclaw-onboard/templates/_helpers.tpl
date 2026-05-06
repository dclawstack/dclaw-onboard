{{/* vim: set filetype=mustache: */}}
{{/* Expand the name of the chart. */}}
{{- define "dclaw-onboard.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/* Create chart name and version */}}
{{- define "dclaw-onboard.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" -}}
{{- end -}}
