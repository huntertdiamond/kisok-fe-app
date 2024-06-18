function truncateEthereumAddress(address: string, length?: number): string {
  const truncationLength = length || 4;
  if (address.length > 12) {
    return `${address.substring(0, 5)}...${address.substring(address.length - truncationLength)}`;
  } else {
    // If the address is too short, just return the original address
    return address;
  }
}

export { truncateEthereumAddress };
