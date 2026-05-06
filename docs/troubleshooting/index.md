# Troubleshooting

Common issues and solutions for DClaw Onboard.

## Quick Diagnostics

```bash
# Check app pods
kubectl get pods -n dclaw-onboard

# Check logs
kubectl logs -n dclaw-onboard deployment/dclaw-onboard-backend

# Check database
kubectl get clusters -n dclaw-onboard
```

## Sections

- [Common Issues](./common-issues)
- [FAQ](./faq)
